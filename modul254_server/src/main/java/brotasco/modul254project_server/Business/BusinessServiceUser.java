package brotasco.modul254project_server.Business;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.exception.ConstraintViolationException;

import brotasco.modul254project_server.Entities.User;

public class BusinessServiceUser {

	private static SessionFactory factory;

	/**
	 * Register a new User
	 * @param user
	 * @return
	 */
	public static User register(User user) {
		try {
			factory = new Configuration().configure().buildSessionFactory();
		} catch (Throwable ex) {
			System.err.println("Failed to create sessionFactory object." + ex);
			throw new ExceptionInInitializerError(ex);
		}
		Session session = factory.openSession();
		Transaction tx = null;

		try {
			tx = session.beginTransaction();
			session.save(user);
			tx.commit();
		} catch(ConstraintViolationException ex){
			if (tx != null)
				tx.rollback();
			System.out.println("Duplicate");
			return null;
		}catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			return null;
		} finally {
			session.close();
		}
		return user;
	}

}
