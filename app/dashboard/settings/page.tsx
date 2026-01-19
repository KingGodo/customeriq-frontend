'use client';

import { useState } from 'react';
import styles from '@/styles/pages/Settings.module.css';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    companyName: 'CustomerIQ Inc.',
    email: 'admin@customeriq.com',
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>Settings</h1>
        <p className={styles.subtitle}>Manage your account and preferences</p>
      </div>

      <div className={styles.settingsCard}>
        <h2 className={styles.sectionTitle}>Account Settings</h2>

        <div className={styles.formGroup}>
          <label htmlFor="companyName" className={styles.label}>
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={settings.companyName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.settingsCard}>
        <h2 className={styles.sectionTitle}>Preferences</h2>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <span>Enable Email Notifications</span>
          </label>
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <span>Dark Mode</span>
          </label>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.saveButton} onClick={handleSave}>
          Save Changes
        </button>
        <button className={styles.cancelButton}>Cancel</button>
      </div>
    </div>
  );
}
