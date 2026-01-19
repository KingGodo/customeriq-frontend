import styles from '@/styles/pages/Customers.module.css';

export default function CustomersPage() {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', status: 'Active' },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>Customers</h1>
        <p className={styles.subtitle}>Manage and view all your customers</p>
      </div>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search customers..."
          className={styles.searchInput}
        />
        <button className={styles.addButton}>+ Add Customer</button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className={styles.nameCell}>{customer.name}</td>
                <td>{customer.email}</td>
                <td>
                  <span
                    className={`${styles.badge} ${
                      customer.status === 'Active'
                        ? styles.badgeActive
                        : styles.badgeInactive
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td>
                  <button className={styles.actionBtn}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
