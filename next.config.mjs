/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                loader: "@svgr/webpack",
                },
            ],
        });
        return config;
    },
    images: {
        disableStaticImages: true, // import�����摜�̌^��`�ݒ�𖳌��ɂ���
    },
};

export default nextConfig;
