import {
  Button,
  Container,
  Grid,
  Input,
  Navbar,
  Switch,
  Text,
} from "@nextui-org/react";
import Link from "next/link";

export const Search = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

export const Cart = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

export const Menu = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export const Heart = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
};

const collapseItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Aqui", link: "/" },
  { id: 3, name: "Van", link: "/" },
  { id: 4, name: "Las", link: "/" },
  { id: 4, name: "Categorias", link: "/" },
];

export default function Navigation() {
  return (
    <header>
      <Navbar
        maxWidth="lg"
        variant="floating"
        containerCss={{ "@xs": { margin: "$0 !important" }, gap: "$6" }}
      >
        <Navbar.Content gap="$6">
          <Navbar.Toggle />
          <Navbar.Brand>
            <Link href="/">
              <Text span b size={"$3xl"}>
                Logo
              </Text>
            </Link>
          </Navbar.Brand>
        </Navbar.Content>
        <Input
          css={{ "@sm": { minWidth: "500px" } }}
          status="primary"
          color="primary"
          size="lg"
          height="max-content"
          clearable
          contentLeft={<Search />}
        />
        <Navbar.Content gap="$6">
          <Button
            flat
            css={{
              minWidth: "max-content",
            }}
            icon={<Heart />}
          />
          <Button
            flat
            css={{
              minWidth: "max-content",
            }}
            icon={<Cart />}
          />
        </Navbar.Content>
        <Navbar.Collapse
          css={{
            top: 82,
            "@xs": { top: 88 },
            width: 300,
            ul: { background: "none !important" },
          }}
        >
          {collapseItems.map((i) => {
            return (
              <Navbar.CollapseItem key={i.id}>
                <Link href={i.link}>{i.name}</Link>
              </Navbar.CollapseItem>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
