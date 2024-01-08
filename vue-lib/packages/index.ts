import Button from './components/button.vue';

const components = [Button];

const install = (app: any) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default { install };

export { Button };