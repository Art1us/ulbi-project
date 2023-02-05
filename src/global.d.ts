declare module "*.scss" {
  interface ICLASSNames {
    [className: string]: string
  }
  const classNames: ICLASSNames
  export = classNames
}
