import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="footer-bottom">
            <p>Thanks for visiting my portfolio 🚀</p>
            <p className="content"> © {new Date().getFullYear()} Huynh Nguyen Ngoc Tan. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
