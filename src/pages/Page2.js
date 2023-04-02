import React from "react";

const Page2 = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Menu */}
        <aside
          id="layout-menu"
          className="layout-menu menu-vertical menu bg-menu-theme"
        >
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <svg
                  width={32}
                  height={22}
                  viewBox="0 0 32 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                    fill="#7367F0"
                  />
                  <path
                    opacity="0.06"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                    fill="#161616"
                  />
                  <path
                    opacity="0.06"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                    fill="#161616"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                    fill="#7367F0"
                  />
                </svg>
              </span>
              <span className="app-brand-text demo menu-text fw-bold">
                Vuexy
              </span>
            </a>
            <a
              href="javascript:void(0);"
              className="layout-menu-toggle menu-link text-large ms-auto"
            >
              <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle" />
              <i className="ti ti-x d-block d-xl-none ti-sm align-middle" />
            </a>
          </div>
          <div className="menu-inner-shadow" />
          <ul className="menu-inner py-1">
            {/* Page */}
            <li className="menu-item">
              <a href="index.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-smart-home" />
                <div data-i18n="Page 1">Page 1</div>
              </a>
            </li>
            <li className="menu-item active">
              <a href="page-2.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-app-window" />
                <div data-i18n="Page 2">Page 2</div>
              </a>
            </li>
          </ul>
        </aside>
        {/* / Menu */}
        {/* Layout container */}
        <div className="layout-page">
          {/* Navbar */}
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a
                className="nav-item nav-link px-0 me-xl-4"
                href="javascript:void(0)"
              >
                <i className="ti ti-menu-2 ti-sm" />
              </a>
            </div>
            <div
              className="navbar-nav-right d-flex align-items-center"
              id="navbar-collapse"
            >
              <div className="navbar-nav align-items-center">
                <a
                  className="nav-link style-switcher-toggle hide-arrow"
                  href="javascript:void(0);"
                >
                  <i className="ti ti-sm" />
                </a>
              </div>
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                {/* User */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a
                    className="nav-link dropdown-toggle hide-arrow"
                    href="javascript:void(0);"
                    data-bs-toggle="dropdown"
                  >
                    <div className="avatar avatar-online">
                      <img
                        src="../../assets/img/avatars/1.png"
                        alt=""
                        className="h-auto rounded-circle"
                      />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img
                                src="../../assets/img/avatars/1.png"
                                alt=""
                                className="h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">
                              John Doe
                            </span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="ti ti-user-check me-2 ti-sm" />
                        <span className="align-middle">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="ti ti-settings me-2 ti-sm" />
                        <span className="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm" />
                          <span className="flex-grow-1 align-middle">
                            Billing
                          </span>
                          <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">
                            2
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="ti ti-logout me-2 ti-sm" />
                        <span className="align-middle">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/*/ User */}
              </ul>
            </div>
          </nav>
          {/* / Navbar */}
          {/* Content wrapper */}
          <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4">Page 2</h4>
              <p>
                Sample page.
                <br />
                For more layout options refer
                <a
                  href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation//layouts.html"
                  target="_blank"
                  className="fw-bold"
                >
                  Layout docs
                </a>
                .
              </p>
            </div>
            {/* / Content */}
            {/* Footer */}
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column">
                  <div>
                    © , made with ❤️ by{" "}
                    <a
                      href="https://pixinvent.com"
                      target="_blank"
                      className="fw-semibold"
                    >
                      Pixinvent
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/"
                      target="_blank"
                      className="footer-link me-4"
                    >
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
            </footer>
            {/* / Footer */}
            <div className="content-backdrop fade" />
          </div>
          {/* Content wrapper */}
        </div>
        {/* / Layout page */}
      </div>
      {/* Overlay */}
      <div className="layout-overlay layout-menu-toggle" />
      {/* Drag Target Area To SlideIn Menu On Small Screens */}
      <div className="drag-target" />
    </div>
  );
};

export default Page2;
