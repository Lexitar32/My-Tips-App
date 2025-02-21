type ISearchIcon = {
  className: string;
};

export const SearchIcon = (props: ISearchIcon) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.167 3.333a5.833 5.833 0 100 11.667 5.833 5.833 0 000-11.667zm-7.5 5.834a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
      <path d="M13.286 13.286a.833.833 0 011.178 0l3.625 3.625a.833.833 0 11-1.178 1.178l-3.625-3.625a.833.833 0 010-1.178z" />
    </svg>
  );
};
