import styles from '@/styles/pages/Overview.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>Overview</h1>
        <p className={styles.subtitle}>Welcome to your dashboard</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Total Customers</h3>
            <span className={styles.icon}>👥</span>
          </div>
          <div className={styles.cardValue}>1,234</div>
          <p className={styles.cardDetail}>+12% from last month</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Revenue</h3>
            <span className={styles.icon}>💰</span>
          </div>
          <div className={styles.cardValue}>$45,231</div>
          <p className={styles.cardDetail}>+8% from last month</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Growth Rate</h3>
            <span className={styles.icon}>📈</span>
          </div>
          <div className={styles.cardValue}>23.5%</div>
          <p className={styles.cardDetail}>YoY growth</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Avg. Value</h3>
            <span className={styles.icon}>⭐</span>
          </div>
          <div className={styles.cardValue}>$567</div>
          <p className={styles.cardDetail}>Per customer</p>
        </div>
      </div>
    </div>
  );
}
