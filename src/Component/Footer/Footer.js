import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const showNav = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Scooter",
      path: "/scooter"
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 4,
      name: "privacy",
      path: "/privacy-policy"
    },
    {
      id: 5,
      name: "terms and conditions",
      path: "/terms-and-conditions"
    }
  ]
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {showNav.map((nav) => {
              return (
                <li className="nav-item" key={nav.id}>
                  <Link to={nav.path} className="nav-link px-2 text-muted">
                    {nav.name}
                  </Link>
                </li>
              )
            })
            }
          </ul>
          <p className="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
      </div>

    </>
  )
}

export default Footer