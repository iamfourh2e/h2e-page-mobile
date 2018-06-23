import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
import { I18n } from '../../configs';
import { Toast } from '../../libs';
import {
  Header,
  HeaderIcon,
  SearchBox,
  Swiper,
  ListItems,
  HeaderContent
} from '../../components';
import { scale, verticalScale, moderateScale } from '../../libs/scaling';

import { Colors, Layout, Images } from "../../constants";
import Feather from 'react-native-vector-icons/Feather';

// styles
import { styles } from './styles';

const Props = {};

const cinema = I18n.t('cinema');
const restaurant = I18n.t('restaurant');
const hotel = I18n.t('hotel');
const shop = I18n.t('shop');

const datas = [
  {
    image: 'https://tastefinefood.com.au/wp-content/uploads/2015/02/cropped-Cup-o-Noodles-italian-food-1920x1080-e1438669573394.jpg'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHxKkoeWUUEGh9vOkJa5Do2MWEu9mIuNOJlEPzANDzTjaPb1KYQ'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxdHsRUItZWoDzQYg5lCpU9h_M6Sfd2H6sxRVTNdMdeSKzzjr5A'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeP-2FKxplPaoSViEnGWfauD2PGJWVo0ErYcK5S2wEV_yd2yKF4A'
  }
  , {
    image: 'https://disneynerd.files.wordpress.com/2018/01/movies-2017.jpg?w=1920&h=621&crop=1'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZUqHZM8ZeTpqgousO9qSPOfIm1jI3loJ_EBvq7bUAlKC9t-acQ'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugt4jP46d2ZL_SrLAn7l5iDSD_KNhPJP6AXIFYiN78SSycWY1LQ'
  }
];

const categoryItems = [
  {
    image: Images.cinema,
    title: cinema
  }, {
    image: Images.restaurant,
    title: restaurant
  }, {
    image: Images.hotel,
    title: hotel
  }, {
    image: Images.shop,
    title: shop
  }
];

const popularItems = [
  {
    logo: 'data:image/jpeg;base64,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2PI6kk9LrpvoW4WpnwiseRLM17mBhHdiLdjbm4ggg8r9VXPFDmjqM23RdKnhGFouKiojHi9jh4ayNP1WO/hGT9nVtP54Q75se36LWenKryYYIxvLNG23g28h/gC4o6QQRwvgmmbUG5la1pjEfNhbID3yQQdrLP8AocE1bivoTOSTqjusvDVY31fsz/3pI/lkf9VizYXWN3pHO/w5InfxuYT8FzzjDiqr+20znTTxHsKR0wY94aHuHaPJiBsdHbEG40W89JfpIimjhGH1MwcHOMmVssJy5QG3LmjNrdZ5dkbNLlXqyG409DezMe316apb/wCF7/nGHD5rGc9p/ZVJ8qaoP/rVa434jq2QYblqahr5aVr35HuaXucQAXZTqfFe8vHDqjAZonyvbU07oQ52ZzXvjMrWh1wbk/dd7id1V/JMOj3n9fYjS6N99gkd6lJVO84jH85coWvfT9/I6SigdexE9XE1w/cjLtfC4WhxniqdmCUUIleBN9oMj8xzOZFLlazNvbva9bAdVeYvRVQih1Lu17PN22cgB2XNcMvlyeFtufNWw7J2aGsrYt8keVfw1FS05qqureYhluKZgF85DW95xcSCSNRZZfBeN4a+Oplpacskp2F5dNZ0rmZXEOzlzja7SLX0uOq5twxij5MMr6NxJjELalmujDHNHmA6A3Bt4HqtZE2SngjqYyclTHUU7+l7lj2H90scPEHovQxbJixqoqjnvXo0tDofB/pNqqrEYYZWwtilzMysabhxaS05nEk6i3LddeX5jZEaWOgrRfvPkf5/Z5xf5ED3L9NRSBzQ4bEAjyIuF1lST0O8Mm07PpERVFwREQBERAEREAREQBERAEREAWDV4RBI17XwxkSNyP7ou5u9iRrus5EBoMM4OpKeKeKKLKyoGWRpc51xlLbAuJI0cVqeCeB34dNIWVPaQyNAdG5mVwc31XBwdYmxIOg38FdUU7zOd1HP/SzwvVVzYBTBjhGXlzS4NJLg0NIJ05H4reYPwhSthp+1poXTRRRMLnNa45mMA32Ot1ZETedUN1XZxDiLhmpnx4vkppTA+eIOflJYYgGNPeGgGVp8l9elTgxsL4PsNG/KWydoYw9+t25bi5I0zfFdtRdrI7T6HDxRaa6nCOMsFqXuw3LTTOaylp2ktY45XA3eCALtI03Wb6T/AEfyipNRRwueyckyMYLlsl8xNh91xF/MeIXakULI1VEvEnZyXD/R4+qwWGCVphqYZJnR5xye8ktdbXK4W1GxA8jrDwPjjoPsZn/6e2XKZ+5l/DcDOW+zt4LtqJvsnu0c/wCF/RjFTUdRDI/NJUxmKR7RYNaR6rL+OtzvYbLOw30cUkdF9ilzzR9r24LjlLX2AOUtsQLX5/eKuSLmzqka+iwSniijhZCwRx3MbSM2Ukkkguub6nXxWwARFBIREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREBKKEQEooRASihEBKKEQEooRASihEBKKEQEooRASihEBKKEQEooRASihEBKKEQEqERAEREARSiAhFKICEUogIRSiAhFKICEUogIRSiAhFKICEUogIRSiAhFKICEUogIRSiAhFKICEUogCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/2Q==',
    companyName: 'Ek Phnom Cinema',
    description: 'Cinema',
    rateValue: 3.7
  },
  {
    logo: 'data:image/png;base64,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',
    companyName: "Château d'Angkor La Résidence",
    description: 'Hotel',
    rateValue: 3.3
  },
  {
    logo: 'https://www.yp.com.kh/logos/profile/angkor-panoramic-hotel-logo-siem-reap-city-siem-reap-357.png',
    companyName: "Angkor Panoramic Hotel",
    description: 'Hotel',
    rateValue: 3.5
  },
  {
    logo: 'https://panpages.blob.core.windows.net/pp-kh/kh/logo_images/original/1385691995/1523393?1385691995',
    companyName: "Angkor Paradise Hotel",
    description: 'Hotel',
    rateValue: 3.1
  },
  {
    logo: 'https://www.yp.com.kh/logos/profile/sourkea-restaurant-spa-logo-phnom-penh-phnom-penh-443.png',
    companyName: "Sourkea Restaurant & Spa",
    description: 'Restaurant & Spa',
    rateValue: 3.2
  },
];

const recommendItems = [
  {
    logo: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/beats-512.png',
    companyName: 'Beat',
    description: 'Powerful sound and audio technology',
    rateValue: 3.6
  },
  {
    logo: 'https://diylogodesigns.com/blog/wp-content/uploads/2016/02/levis-logo-design-for-fashion.png',
    companyName: "Liv's",
    description: 'Clothes',
    rateValue: 4.3
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyndNqnpL0W4lrUYb8T7yVY110_VNAa9eZkXAfs97aoIA4BvS1',
    companyName: "McDonald's",
    description: 'Fast food',
    rateValue: 4.5
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/31/Cafe_Amazon_Logo.jpg',
    companyName: "Café Amazon",
    description: 'Coffee',
    rateValue: 4.1
  },
  {
    logo: 'https://seeklogo.com/images/S/starbucks-logo-B21BB4794A-seeklogo.com.png',
    companyName: "Starbucks",
    description: 'Coffee',
    rateValue: 4.1
  }
];

const width = Layout.window.width;
const height = Layout.window.height;
const rateIconSize = scale(12);

export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
  }

  getWidth() {
    return Dimensions.get('window').width;
  }

  renderSlide() {
    return datas.map((data, k) => {
      return (
        <View key={k}>
          <Image
            style={styles.slideImage}
            source={{ uri: data.image }}
          />
        </View>
      )
    })
  }

  renderCategoryItems() {
    const { navigation } = this.props;
    return categoryItems.map((data, k) => {
      return (
        <View key={k}>
          <TouchableOpacity
            style={styles.categoryItemsDetail}
            onPress={() => navigation.navigate({ routeName: "CategoryList", key: "CategoryList", params: data.title })}
          >
            <Image source={data.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{data.title}</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }

  render() {
    const { navigation } = this.props;
    const backgroundColor = Colors.success;
    const color = Colors.black(1);
    const appTitle = I18n.t('appTitle');
    const search = I18n.t('search');
    const category = I18n.t('category');
    const more = I18n.t('more');
    const popular = I18n.t('popular');
    const recommend = I18n.t('recommend');
    const width = this.getWidth();

    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.white(1)
      }}>
        <Header headerBackground={backgroundColor}>
          <SearchBox
            placeholder={search}
            color={color}
            iconColor={Colors.success}
          >
            <HeaderIcon style={{ alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate({ routeName: "DrawerToggle", key: "DrawerToggle" })}
              >
                <Feather name='menu' color={Colors.success} size={scale(25)} />
              </TouchableOpacity>
            </HeaderIcon>
          </SearchBox>
        </Header>

        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* slider */}
            <View style={styles.contentSlide}>
              <Swiper
                showsButtons={false}
                autoplay={true}
                style={styles.swiperWrap}
              >
                {this.renderSlide()}
              </Swiper>
            </View>

            {/* category */}
            <View style={styles.contentWrapper}>
              <HeaderContent
                title={category}
              />
              {/* category items */}
              <View style={styles.categoryItems}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ flexGrow: 1 }}
                >
                  {this.renderCategoryItems()}
                </ScrollView>
              </View>
            </View>

            {/* popular items */}
            <View style={styles.contentWrapper}>
              <HeaderContent
                title={popular}
                more={more}
              />
              <ListItems
                data={popularItems}
                scrollHorizontal={true}
              />
            </View>

            {/* recommend for you */}
            <View style={styles.contentWrapper}>
              <HeaderContent
                title={recommend}
                more={more}
              />
              <ListItems
                data={recommendItems}
                scrollHorizontal={true}
              />
            </View>

            {/* more */}
            <View style={styles.contentWrapper}>
              <HeaderContent
                title={more}
              />
              <ListItems
                data={recommendItems}
              />
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

