
export default function Header() {
  return (
    <header >
      <div className="it-header-slim-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-header-slim-wrapper-content">
                <a className="d-lg-block navbar-brand" href="#">CENSIFY</a>
                <div className="it-header-slim-right-zone">
                  <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="visually-hidden">Selezione lingua: lingua selezionata</span>
                      <span>ITA</span>
                      <svg className="icon d-none d-lg-block">
                        <use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                      </svg>
                    </a>
                    <div className="dropdown-menu">
                      <div className="row">
                        <div className="col-12">
                          <div className="link-list-wrapper">
                            <ul className="link-list">
                              <li><a className="dropdown-item list-item" href="#"><span>ITA</span></a></li>
                              <li><a className="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary btn-icon btn-full">
                    <span className="rounded-icon">
                      <svg className="icon icon-primary">
                        <use href="/bootstrap-italia/dist/svg/sprites.svg#it-user"></use>
                      </svg>
                    </span>
                    <span className="d-none d-lg-block">Accedi all'area personale</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </header>
  )
}
