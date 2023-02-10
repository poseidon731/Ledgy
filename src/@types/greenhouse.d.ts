declare type GreenhouseJobProps = Id & {
  title: string;
  content: string;
  gh_Id: string;
  location: { name: string };
};

declare type GreenhouseDepartmentProps = Id & {
  name: string;
  jobs?: GreenhouseJobProps[];
};
