import {View, Text, StyleSheet, FlatList} from 'react-native'

const items = [
    {
        id: 'Arzneimittel und Gesundheit',
        title: 'Arzneimittel und Gesundheit',
    },
    {
        id: 'Beauty und Pflege',
        title: 'Beauty und Pflege',
    },
    {
        id: 'Kinder und Familie',
        title: 'Kinder und Familie',
    },
    {
        id: 'Sanitätshaus',
        title: 'Sanitätshaus',
    },
    {
        id: 'Tiergesundheit und Tierbedarf',
        title: 'Tiergesundheit und Tierbedarf',
    },
    {
        id: 'Vitamine, Sport und Ernährung',
        title: 'Vitamine, Sport und Ernährung',
    },
];

const styles = StyleSheet.create({
    header: {fontWeight: 'bold'}
})

export const ProductMenu = () =>
    <View>
        <View>
            <Text style={styles.header}>Unsere Produkte</Text>
            <View>
                <Text>Unsere Produkte</Text>
            </View>
        </View>
        <View>
            <FlatList
                data={items}
                renderItem={({item}) => <View><Text>{item.title}</Text></View>}
                keyExtractor={item => item.id}
            />
        </View>
    </View>
