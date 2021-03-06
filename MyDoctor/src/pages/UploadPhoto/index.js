import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Header, Button, Link, Gap} from '../../component'
import {ILNullPhoto, IconAddPhoto} from '../../assets'
import {colors, fonts} from '../../utils'

const UploadPhoto = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header onPress={() => navigation.goBack()} title="Upload Photo"/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar}/>
                        <IconAddPhoto style={styles.addPhoto}/>
                    </View>
                        <Text style={styles.name}>Reynaldi Septian Dwiyanto</Text>
                        <Text style={styles.profession}>Fullstack Developer</Text>
                </View>
                    <View>
                        <Button title="Upload and Continue"/>
                        <Gap height={30}/>
                        <Link title="Skip For This" align="center" size={16}/>
                    </View>
                </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height:130,
        borderWidth:1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color:colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily:fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary
    }
})
