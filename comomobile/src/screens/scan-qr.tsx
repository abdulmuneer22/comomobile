import { StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useCameraDevices, Camera } from 'react-native-vision-camera'
import Loader from '../components/loader'
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { MAIN_ROUTES } from '../navigation/ROUTES';


export default function ScanQRCode() {

    const [hasPermission, setHasPermission] = useState(false);
    const [barCodeReceived, setBarCode] = useState<string>('');
    const isFocused = useIsFocused()
    const navigation = useNavigation()
    const { params } = useRoute()


    const devices = useCameraDevices()
    // TODO dismiss camera if not on focus
    const device = devices.back



    const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
        checkInverted: true,
    });

    const getPermission = useCallback(async () => {
        const cameraPermission = await Camera.getCameraPermissionStatus()
        if (cameraPermission !== 'authorized') {
            await Camera.requestCameraPermission()
            // TODO -- handle if user denies permission
            setHasPermission(true)
        } else {
            setHasPermission(true)
        }
    }, []);





    useEffect(() => {
        if (!hasPermission) {
            getPermission();
        }
    }, [getPermission, hasPermission]);


    useEffect(() => {
        if (barcodes && barcodes.length && !barCodeReceived) {
            const value = barcodes[0]?.displayValue || ""
            setBarCode(value)
            setHasPermission(false)
            setBarCode("")
            navigation.navigate(MAIN_ROUTES.CODE_RECEIVED, { code: value, name: params?.name })
        }

    }, [barcodes, barCodeReceived, navigation, params?.name])



    if (!device || !hasPermission) {
        return <Loader />
    }
    return (
        <>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isFocused}
                frameProcessor={frameProcessor}
            />

        </>
    )
}

