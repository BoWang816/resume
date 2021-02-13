/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './index.module.less';
import CommonModule from "../module";

export default function Evaluate() {
    const title = '自我评价';
    const id = 'evaluate';
    return (
        <CommonModule id={id} title={title}>
            这里是自我评价
        </CommonModule>
    )
}
