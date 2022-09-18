import styles from "./DesignSystem.module.scss";

function DesignSystem() {
  return (
    <div className={styles.designSystemWrapper}>
      <section className={styles.designSystemSection}>
        <h1>HEADINGS:</h1>
        <ul>
          <li>
            <h1>h1 Heading</h1>
          </li>
          <li>
            <h2>h2 Heading</h2>
          </li>
          <li>
            <h3>h3 Heading</h3>
          </li>
          <li>
            <h4>h4 Heading</h4>
          </li>
          <li>
            <h5>h5 Heading</h5>
          </li>
          <li>
            <h6>h6 Heading</h6>
          </li>
        </ul>
      </section>
      <section className={styles.designSystemSection}>
        <h1>Texts</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
          deserunt dignissimos eos quibusdam
        </p>
      </section>
      <section className={styles.designSystemSection}>
        <h1>Anchor</h1>
        <a href="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
          deserunt dignissimos eos quibusdam
        </a>
      </section>
    </div>
  );
}

export default DesignSystem;
