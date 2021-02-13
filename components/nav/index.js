/**
 * index.js
 * @author wangbo
 * @since 2021/2/13
 */
import styles from './style.module.less'
import {menuList} from '../../data';

export default function Nav(props) {
    const activeItem = props.activeItem || 'info';
    return (
        <div className={styles.pageArea}>
            <ul className={styles.itemIcon}>
                {
                    menuList.map(i => {
                        return (
                            <li className={i.id === activeItem ? styles['active'] : '' } key={i.id}>
                                <a href={'#' + i.id}>
                                    <img className={styles.itemImg} alt={i.title}
                                         src={i.id === activeItem ? i.activeImg : i.img}/>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
