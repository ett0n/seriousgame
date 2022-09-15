#Typescript and props help

https://frontendsociety.com/using-a-typescript-interfaces-and-types-as-a-prop-type-in-vuejs-508ab3f83480

props: {
testProp: Object as PropTypes<{ test: boolean }>
}

props: {
testProp: Object as () => Interface
}
