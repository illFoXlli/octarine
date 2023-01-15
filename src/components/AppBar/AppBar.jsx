import { ItemNav, LinkItemNav, ListNav, NavStyled } from './AppBar.styled';

export const navItems = [
  { href: '#home', text: 'Home', icon: null, name: '#home' },
  { href: '#tv', text: 'TV Shows', icon: null, name: '#tv' },
  { href: '#movies', text: 'Movies', icon: null, name: '#movies' },
  { href: '#series', text: 'Series', icon: null, name: '#series' },
];

const AppBar = () => {
  return (
    <>
      <NavStyled>
        <ListNav>
          {navItems.map(({ href, text, name }) => (
            <ItemNav key={href}>
              <LinkItemNav href={name} title={text}>
                {text}
              </LinkItemNav>
            </ItemNav>
          ))}
        </ListNav>
      </NavStyled>
    </>
  );
};

export default AppBar;
