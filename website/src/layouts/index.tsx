import { Link, Outlet } from "umi";

import menus from "../../config/menu";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <div className={styles.header}>
        <div className={styles.menus}>
          {menus.map((item) => (
            <Link to={item.path} key={item.path} className={styles.title}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className={styles.profile}>
          <Link to="/article">创作</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
