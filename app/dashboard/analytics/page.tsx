import styles from '@/styles/pages/Analytics.module.css';

export default function AnalyticsPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>Analytics</h1>
        <p className={styles.subtitle}>Deep dive into your metrics</p>
      </div>

      <div className={styles.filtersContainer}>
        <select className={styles.filterSelect}>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <h3>Traffic Over Time</h3>
          <div className={styles.chartPlaceholder}>
            <p>📊 Chart visualization would go here</p>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3>Conversion Rate</h3>
          <div className={styles.chartPlaceholder}>
            <p>📈 Chart visualization would go here</p>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3>User Engagement</h3>
          <div className={styles.chartPlaceholder}>
            <p>👥 Chart visualization would go here</p>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3>Revenue Trends</h3>
          <div className={styles.chartPlaceholder}>
            <p>💰 Chart visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
