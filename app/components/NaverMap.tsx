'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        naver: any;
    }
}

export default function NaverMap() {
    const mapRef = useRef<HTMLDivElement>(null);

    const initMap = () => {
        if (!mapRef.current || !window.naver) return;

        // 1. Initialize Map
        const mapOptions = {
            center: new window.naver.maps.LatLng(37.4765, 126.6425), // Default center
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: window.naver.maps.Position.TOP_RIGHT,
            },
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOptions);

        // 2. Geocoding (Address -> Coordinates)
        window.naver.maps.Service.geocode({
            query: '인천광역시 동구 동산로 88'
        }, function (status: any, response: any) {
            if (status !== window.naver.maps.Service.Status.OK) {
                return console.error('Address search failed');
            }

            const result = response.v2.addresses[0];
            const coords = new window.naver.maps.LatLng(result.y, result.x);

            // Move map center
            map.setCenter(coords);

            // 3. Add Marker
            new window.naver.maps.Marker({
                position: coords,
                map: map
            });

            // 4. Add Custom Overlay (Tooltip)
            const content = [
                '<div style="position: absolute; transform: translate(-50%, -100%); margin-bottom: 45px; display: flex; flex-direction: column; align-items: center; pointer-events: none;">',
                '   <div style="background: white; border: 1px solid #ccc; border-radius: 6px; padding: 10px 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); text-align: center; white-space: nowrap;">',
                '       <div style="font-weight: bold; color: #222; margin-bottom: 3px;">동제당한의원</div>',
                '       <div style="font-size: 13px; color: #555;">인천 동구 동산로 88</div>',
                '   </div>',
                '   <div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 10px solid white; margin-top: -1px; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05));"></div>',
                '</div>'
            ].join('');

            new window.naver.maps.Marker({
                position: coords,
                map: map,
                icon: {
                    content: content,
                    size: new window.naver.maps.Size(0, 0),
                    anchor: new window.naver.maps.Point(0, 0)
                }
            });
        });
    };

    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=azvkoqysoc&submodules=geocoder"
                onLoad={initMap}
            />
            <div
                ref={mapRef}
                className="w-full h-[400px] rounded-lg shadow-md bg-gray-100 border border-gray-200"
            />
        </>
    );
}
