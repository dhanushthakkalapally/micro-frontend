import { Layout } from 'antd';

const {Footer: AntFooter} = Layout;
const Footer = () => {

    return (
        <AntFooter style={{ textAlign: 'center', padding:  '4px 50px'}}>
            Books App ©2023 Created by Dhanush
        </AntFooter>
    )
}

export default Footer;