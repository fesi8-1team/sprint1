import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true, // 개발 중 잠재적 문제를 조기에 발견하기 위한 설정
    swcMinify: true, // Rust 기반 컴파일러로 빌드 속도 향상
    compress: true, // 응답 압축으로 성능 향상
    poweredByHeader: false, // 보안을 위해 X-Powered-By 헤더 제거
    images: {
        domains: [], // 외부 이미지 도메인 허용 목록
        formats: ['image/webp', 'image/avif'], // 최신 이미지 포맷 지원
    },
    i18n: {
        locales: ['ko', 'en'],
        defaultLocale: 'ko',
    },
};

export default nextConfig;
