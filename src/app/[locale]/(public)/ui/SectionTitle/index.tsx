import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className={styles.title}>
      <h4>{title}</h4>
      <div className={styles.heading}>
        <h1>{subtitle}</h1>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default SectionTitle;
