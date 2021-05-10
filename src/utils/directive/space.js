// 注册全局指令
import Vue from 'vue';

/**
 * 设置元素的间隔
 * @param el    父元素
 * @param side  间隔指向 margin|padding
 * @param directions    方向 {top,bottom,left,right}
 * @param value 间隔大小
 */
function setNodeSpace(el, side, directions, value) {
    for (let key in directions) {
        //如果设置为 true 或者 数字
        let valid = ["boolean", "number"].find(i => i === typeof (directions[key]));

        if (valid) {
            //属性名, 第一个字大小写
            let attrName = key[0].toUpperCase() + key.substring(1)
            //修改间隔 如果是在 value 中定义了方向大小，则直接使用指定方向的大小值
            if (typeof (directions[key]) === 'number') {
                el.style[side + attrName] = directions[key] + "px";
            } else if (directions[key] === true) {
                el.style[side + attrName] = value + "px";
            }
        }
    }
}

/**
 * 初始化，并设置元素间隔
 * @param el
 * @param binding
 * @param side  间隔指向 margin|padding
 */
function space(el, binding, side) {
    let {top, bottom, left, right} = typeof (binding.value) === "object" ? binding.value : binding.modifiers;

    if (binding.arg === 'all') {
        top = true
        bottom = true
        left = true
        right = true
    }
    el.childNodes.forEach(node => {
        setNodeSpace(node, side, {top, bottom, left, right}, binding.value)
    })
}

/**
 * margin 指令， v-margin="x"  被绑定的每一个子元素将被填充 x的 margin
 * v-margin.top.bottom.left.right 表示需要设置间隔的方向
 * 如果需要全部方向都设置可写成  v-margin:all
 */
Vue.directive('child-margin',(el, binding) => {
    space(el, binding, 'margin')
})

/**
 * padding 指令， v-padding="x"  被绑定的每一个子元素将被填充 x的 padding
 * v-padding.top.bottom.left.right 表示需要设置间隔的方向
 * 如果需要全部方向都设置可写成  v-padding:all
 */
Vue.directive('child-padding',(el, binding) => {
    space(el, binding, 'padding')
})
