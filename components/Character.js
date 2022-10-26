import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Character({character}){    

    const [img, setImg] = React.useState({
        aemon : require('../img/aemon.jpg'),
        aerys : require('../img/aerys.jpg'),
        arya : require('../img/arya.jpg'),
        baelish : require('../img/baelish.jpg'),
        bran : require('../img/bran.jpg'),
        brienne : require('../img/brienne.jpg'),
        catelyn : require('../img/catelyn.jpg'),
        cersei : require('../img/cersei.jpg'),
        daenerys : require('../img/daenerys.jpg'),
        jaime : require('../img/jaime.jpg'),
        joffrey : require('../img/joffrey.jpg'),
        jon : require('../img/jon.jpg'),
        mance : require('../img/mance.jpg'),
        ned : require('../img/ned.jpg'),
        melisandre : require('../img/melisandre.jpg'),
        olenna : require('../img/olenna.jpg'),
        ramsay : require('../img/ramsay.jpg'),
        robert : require('../img/robert.jpg'),
        samwell : require('../img/samwell.jpg'),
        sansa : require('../img/sansa.jpg'),
        theon : require('../img/theon.jpg'),
        tormund : require('../img/tormund.jpg'),
        tyrion : require('../img/tyrion.jpg'),
        tywin : require('../img/tywin.jpg'),
        varys : require('../img/varys.jpg'),
        ygritte : require('../img/ygritte.jpg')
    });

    return(
        <Image style={styles.img} source={ img[character] } />
    )
}

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 400,
    }
  })