export const MenuIcon = ({ styles }: {styles: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="menu-icon"
    style={{ transition: 'all .2s ease'}}
    className={styles}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6l16 0" />
    <path d="M4 12l16 0" />
    <path d="M4 18l16 0" />
  </svg>
);
