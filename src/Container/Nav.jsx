import Logo from '../assets/img/logo.JPG';

function Nav() {
  return (
    <div className="container-fluid p-0 m-0 nav">
        <div className="d-flex flex-row px-5">
            <div className='my-auto'>
                <img src={Logo} width="50px" alt="logo" />
            </div>
            <h1 className="display-5">Know your fruit</h1>
        </div>
    </div>
  )
}

export default Nav