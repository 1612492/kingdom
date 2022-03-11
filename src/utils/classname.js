export default function classname(...classes) {
  return classes.filter(Boolean).join(' ');
}
