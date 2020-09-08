import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleNav = (e, { name }) => setActive(name);
  return (
    <Segment inverted style={{ borderRadius: 0 }}>
      <Menu inverted pointing secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={active === "home"}
          onClick={handleNav}
        />
        <Menu.Item
          as={Link}
          to="/projects"
          name="projects"
          active={active === "projects"}
          onClick={handleNav}
        />
      </Menu>
    </Segment>
  );
};

export default Navbar;
