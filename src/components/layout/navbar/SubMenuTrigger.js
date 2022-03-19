import React, { useRef } from "react";
import PropTypes from "prop-types";
import { graphql, Link, useStaticQuery } from "gatsby";
import { useDetectOutsideClick } from "hooks/useDetectOutsideClick";
import { StyledNavLink } from "./NavList.styles";
import slugify from "slugify";

const SubMenuTrigger = ({ children }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const data = useStaticQuery(graphql`
    {
      allContentfulProdukt {
        nodes {
          productName
          category
          id
        }
      }
    }
  `);

  const groupBy = (list, key) => {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const onClick = e => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const items = data.allContentfulProdukt.nodes;
  const categories = groupBy(items, "category");

  const createStructure = () => {
    let items = [];
    for (const [key, value] of Object.entries(categories)) {
      items.push({ [key]: value });
    }
    return items;
  };

  const getLink = (array, slug) => {
    if (array.length === 1) {
      return `/oferta/${slug}`;
    } else {
      return null;
    }
  };
  const renderMenuSubItem = (product, parent) => {
    if (product.productName.toLowerCase() !== parent.toLowerCase()) {
      const slug = slugify(product.productName, {
        replacement: "-",
        lower: true,
      });
      return (
        <li key={product.id} className="second-level">
          <Link to={`/oferta/${slug}`}>{product.productName}</Link>
        </li>
      );
    }
  };

  const renderMenuItem = (name, children) => {
    const slug = slugify(name, {
      replacement: "-",
      lower: true,
    });
    return (
      <li key={name} className="top-level">
        <StyledNavLink
          activeClassName="nav--active"
          to={getLink(children, slug)}
        >
          {name}
        </StyledNavLink>
      </li>
    );
  };

  return (
    <details open={isActive} onClick={e => onClick(e)}>
      <summary ref={dropdownRef}>{children}</summary>
      <ul className="submenu">
        {createStructure().map(i => {
          for (const [key, value] of Object.entries(categories)) {
            if (i[key]) {
              return (
                <div>
                  {renderMenuItem(key, value)}
                  {i[key].map(y => renderMenuSubItem(y, key))}
                </div>
              );
            }
          }
        })}
      </ul>
    </details>
  );
};

SubMenuTrigger.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubMenuTrigger;
