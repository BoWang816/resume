/**
 * 数据集，将所有相关数据写在这里，模版会自动获取
 * data.js
 * @author wangbo
 * @since 2021/2/13
 */
// 左侧菜单列表
export const menuList = [
    {
        id: 'info',
        title: '个人信息',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAMAAAAIG46tAAAAYFBMVEUAAACampqbm5uZmZmampqampqsrKynp6eZmZmampqampqampqampqZmZmampqampqampqhoaGampqampqZmZmampqbm5uZmZmcnJyZmZmampqbm5uampqbm5uZmZmZmZmaPbGdAAAAH3RSTlMA8kPVkzcFDPiafr6gj3ZfKxUT3s7HSjIe5q9kjmtVcroZIgAAANtJREFUKM+lkUluwzAQBIebKFmLtUu2k9T/fxlDEECTppFD6tYooGeGlEDfGqVM28s7heXEFm+uhsp57yqoU2u5aTnQN2zseni600I8t6UKoaKNpMGF4DCRVPgQPCqRQwhDIg06BJ3UWpoQmuSWvcSFfcpdIi5Mwzlx4hK7sYKlON5xgS//6n4U3N3ZeodJv3YybyFuM6H5QdkV0Rd1JQ85WEuuknCF9dhFhY5AhxqP+2vJUGNFvELnpEb5Z/ssWRau0vCdlx2NGLa8XDGiGPNyRwnIB+A/8iN/yF+BwRXJlHEokQAAAABJRU5ErkJggg==',
        activeImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAMAAAAIG46tAAAAZlBMVEUAAAAAuo4Au48Auo0Auo0A0qUAwpYAuo4Au48Auo4AuY4Auo8Auo4Auo4Auo4Auo4Avo4Au5YAuo0Auo4Auo4Auo4Au44AvY8AvpMAv5kAuY4Auo4Auo4AvJAAuo8Auo0Axo4AuY14KBE5AAAAIXRSTlMA9EPVkwYMYTbvmo/7vqB+KxXezsd1SjIeFOavejprVRLrWauFAAAA4ElEQVQoz6WRWXKDMBAFtYDYDGYHb0n6/pdMArjGwnL5w/01r1olzYyUUBdWa1vU6pk4YiOKn1wJeepcmkO5txFns1bmTOS7Gv7cZsF/tyCXkFN40pJKSLGe1DgJDr2TjYRmJy1GgsHuJqkkVLtZZk0q/ehZeRxpm+3FlqPvTjn08bLHHgr36L4zuNzW+naB1jzeSTdJnDq43kPCYYi9LxoOJGs5LtWGnB+XXjLpTriSnZb5SxWg/N+E05iQNGinEjoVpCdRFV9hOVApyxSWI1Zl/ITlTKZAvQA+kS95I38BMEkXNOFSojYAAAAASUVORK5CYII=',
    },
    {
        id: 'work',
        title: '工作经历',
        activeImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAACPElEQVRIS+1WXUiTURh+ztQ57CvmSGdj0mrNMOwiRYhJhBdDlFUY5I33XUTRhbrLoi6nXoTQRffdJPQ7ClQQEYcg7qZIUpdaYzYbc8j8m7oT35nfcFrrPYLUxQ6ci4/zvM/7nOd9v8PLQF3ve5qRSj0DhzVnCEMIOt1ttHR+oFAzCkhgfN7vf02ukaki3J5KCjddwDsvVwm5uyu3Ab7u9Pk1D4mbBBKERyaAWluKnzKY3V5hUrWVSUDBMoQY1VoKnwyG7fZKRsDA5Ta4Tp6W4Tg0diA6j6bxfhGfEWAsMsDf0I5qxXRoYkrgVCIG59hzxLc2sgWoX6qIF3XXj8yJwegC2ibfZpJnOXDLch794S8oYDr0XmjE/TO1lAuRMU/mAuj4PIwdnoKWK0tAyt2FxzN+PJr2g3OOBpMV3uqrcJZayEl+B/Qvh+GZGsFYLATGGB5WOfHA4YRufxNqL9zLHzO483EQkc1Vwdd6qgr3bLW4YrKikNHerW3OMRoLoW8+gFeL04LHXHwMTy+6cLPCka79nwSoh4mdLfR+nUBPcAKJ7aQIKNUb4C63w1VmQ6XhOCwGRWx1hTcSYn9bX8FQdAG+pSCWk+kmUwr16LTXo+NsPZSCooxJOQVoqKXkGvrmAngdmcWnlZ9Spag5UYbWCgfu2i6hXF9yIJYkYG9UcC2ON5FZTMYjCG+mb6xudWluWIoV1BnNuGE+B3uJMadgaQFS1yeA8wLyDuQd+I8ckBm3Cf+3FESMZP94KP0FPMsKuh5AczgAAAAASUVORK5CYII=',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAB9ElEQVRIS+1Wz8uhURR+3i8iJCkhM/mxJYoFC0ubycJ/cf1N7n9hYzaWFiwoYutHQ0hJQkTe6dx630YzY8771dc3C7fu4naf85znPOd0uxqYS0r5DYDUdf3LsxBN0+YAhBDiO4da44AII6X88a/kBheJEEJ85XCzBdRqNZ0IhRBPeaWU6r5arbK4WSAi/DAB3N5y7LSCMWZFs9JbKwk4WBKhca3lEFrBGLNiCiiXy4hEIlY43o2dz+doNBoq3hTgcDhQqVTg8/neTcwJ3O12qNfruFwujwLoRCJKpdKHObFYLNBsNs3kDw4kEgmMx2O8vb2hUCgglUpxCmJjhsMh2u027vc7jFwPAuiB6fV66Ha70HUdoVAI+XwewWCQneRPwPV6jU6ng9VqBU3TkMvlkM1m6WV9bIHxwk2nU7RaLZxOJwWIx+NIJpMIh8OKgLOogOVyidFohMlkokJcLheKxSJisZg6/1UAXd5uNwwGA/T7fVyvVxVA8xGNRtV8eDweReh2u9Xd8XhUgg+HA6jPs9nM7LPdbkcmk0E6nYbNZjP1PxVgoM7nM6h35Mp2u+UUb2L8fr+qlmbJ6XT+FssS8GvUfr9XlW02G1UtbaqcFjlBjtAOBALKKa/X+1SwZQGWymeAXwJeDrwc+H8c+PQv2Wd/Sn8COxIg7pmyFfgAAAAASUVORK5CYII='
    },
    {
        id: 'education',
        title: '教育经历',
        activeImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAWCAMAAACWh252AAAATlBMVEUAAAAAwJsAtIsAtIsAs4oAtYwAto0AtIsAs4oAtIsAtYwAtYoAtYv///8As4rQ8eoxwqHv+/jg9vGv6NuU4M6I3Mlf0LYwwqEXupVw1b7D7ZCAAAAADXRSTlMACfnIqFg48eiYaBg3ache8AAAAHBJREFUKM/tylkKwCAMRdHEqXO0o7r/jdb6ISFdQaGPQDhwAQDtoHulej1YhLedUdSmjJOG8uK5+3X1+xkLpEvglzafiTJ3DRY+wT/4WrAdV0hEKVzH9gTcNeAL5bhr0JlxnhAnN5qOSBq0RWhDq6VvvfYh7WhyfDIAAAAASUVORK5CYII=',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAWCAMAAACWh252AAAAUVBMVEUAAACampqZmZmampqkpKSZmZmbm5uZmZmampqampqampqfn5+kpKSampqZmZn///+ZmZmtra3t7e3T09P5+fnz8/Pf39+/v7+jo6OcnJzGxsZVIEZxAAAAD3RSTlMA+chYB6g48eiYaBgOpzcGEp9BAAAAcUlEQVQoz+3KWQqAMAxF0XR01qR17P4Xau1HCXEFgo9AOHABYDSdbpVqdWdGeNs7hXXKeWnIj+Ie1jXskTKkcxCWupAQE3cJFj7BP/hasMWDzus66YjbE3CXgI/ycZegmfp5sHbwvWsQpUEbC3XWaOkbkJkmzb5ZGykAAAAASUVORK5CYII='
    },
    {
        id: 'project',
        title: '个人项目',
        activeImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeBAMAAAC/JAEaAAAAFVBMVEUAAAAAtpIAtIsAtIoAtIsAs4sAs4oU+bkUAAAABnRSTlMAHOam7bYshdk8AAAAVklEQVQY02OAAEYjZQEGZCCSluaIImAWKJqMIqAmwJiEIpAGRpQLQB2DEIA6BiEAdQxCAOoYhACYoJEA2H0IAWhgIQSggYUQgAYWsgCYorlAGhrAEAAAghI6xsACYm0AAAAASUVORK5CYII=',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeBAMAAAC/JAEaAAAAFVBMVEUAAACbm5uZmZmampqampqampqZmZncDqqFAAAABnRSTlMAHOam7bYshdk8AAAAVklEQVQY02OAAEYjZQEGZCCSluaIImAWKJqMIqAmwJiEIpAGRpQLQB2DEIA6BiEAdQxCAOoYhACYoJEA2H0IAWhgIQSggYUQgAYWsgCYorlAGhrAEAAAghI6xsACYm0AAAAASUVORK5CYII='
    },
    {
        id: 'skill',
        title: '职业技能',
        activeImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAmBAMAAAAlwuZsAAAAElBMVEUAAAAAtIoAtoz///8As4pKyqy72Z+GAAAAA3RSTlMA40mAJZ3FAAAARUlEQVQoz2NgYDCGAyAHk+sCBTi4EKXYuIouCK6LEIMIMteRAciGmgRiYXLhgPrcEIg9rmjcEWoyHq6ICxJwZFBE5goBAOqOcH/IAG4MAAAAAElFTkSuQmCC',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAmBAMAAAAlwuZsAAAAFVBMVEUAAACYmJiampr///+Xl5e2tra3t7dKlL4qAAAAA3RSTlMA40mAJZ3FAAAATUlEQVQoz2NgYDCGAyAHk+sCBTi4EKXYuIouCK6LEIMIMteRAciGmgRiYXLhgPrcFIg9buhcyk0OgRjlisYd1Cbj4Yq4IAFHBkVkrhAAFNxwoT3y5TgAAAAASUVORK5CYII='
    },
    {
        id: 'evaluate',
        title: '自我评价',
        activeImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAAAD///+ZmZmoVBq9AAAAAXRSTlMAQObYZgAAACtJREFUGNNjWAUGCxgQjKWhIEAMY9UqdMbSqMHCgHgHmcHABZYjwIAohzMAlJprOztfN5YAAAAASUVORK5CYII=',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAAAD///+ZmZmoVBq9AAAAAXRSTlMAQObYZgAAACtJREFUGNNjWAUGCxgQjKWhIEAMY9UqdMbSqMHCgHgHmcHABZYjwIAohzMAlJprOztfN5YAAAAASUVORK5CYII='
    }
];
// 个人信息
export const basicInfo = {
    // 头像
    avatar: '/images/profile.jpeg',
    // 标题
    title: '前端开发工程师',
    // 副标题
    subTitle: '一个前端开发工程师，喜欢瞎搞搞，喜欢技术，喜欢代码',
    // 具体信息，最多支持九项
    detailInfo: {
        // 手机号
        mobile: '18392029102',
        // 邮箱
        email: 'bo.wang1016@outlook.com',
        // 学校
        school: {
            title: '西北农林科技大学(985、211)',
            href: 'https://www.nwsuaf.edu.cn/'
        },
        // 毕业时间
        graduateTime: '2018-07',
        // 工作经验
        workTime: '3年',
        // 求职意向
        want: '西安 16K～20K',
        // 博客地址
        blog: {
            title: 'https://blog.wangboweb.site',
            href: 'https://blog.wangboweb.site'
        },
        // github
        github: {
            title: '恪晨',
            href: 'https://github.com/BoWang816'
        },
        juejin: {
            title: '恪晨',
            href: 'https://juejin.cn/user/2049145403882430'
        }
    }
};
// 工作经历列表
export const works = [];
// 教育经历列表
export const education = [];
// 项目经历列表
export const projectList = [];
// 职业技能列表
export const skillList = [];
// 自我评价
export const evaluate = {};
