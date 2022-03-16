import React, { useRef } from "react";
import { useDetectOutsideClick } from "hooks/useDetectOutsideClick";
import { graphql, useStaticQuery } from "gatsby";
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

  // TODO: show products grouped by category OR rebuild menu.

  // for (const [key, value] of Object.entries(categories)) {
  // value.forEach(item => console.log(`${key} - ${item.productName}`));
  // }
  return (
    <details open={isActive} onClick={e => onClick(e)}>
      <summary ref={dropdownRef}>{children}</summary>
      <ul className="submenu">
        {items.map(product => {
          const slug = slugify(product.productName, {
            replacement: "-",
            lower: true,
          });
          return (
            <li key={product.id}>
              <StyledNavLink
                activeClassName="nav--active"
                to={`/oferta/${slug}`}
              >
                {product.productName}
              </StyledNavLink>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

export default SubMenuTrigger;
