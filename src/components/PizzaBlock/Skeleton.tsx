import ContentLoader from 'react-content-loader';

const MyLoader = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={452}
        viewBox="0 0 280 452"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="134" cy="136" r="125" />
        <rect x="0" y="272" rx="10" ry="10" width="280" height="27" />
        <rect x="0" y="312" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="414" rx="10" ry="10" width="90" height="30" />
        <rect x="125" y="408" rx="20" ry="20" width="155" height="40" />
    </ContentLoader>
);

export default MyLoader;
