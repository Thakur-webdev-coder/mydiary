import * as React from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import Container from '../Components/Container';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DiaryItem } from '../models/DiaryItem';
import DateNTime from '../Components/DateNTime';
// import { ScrollView } from 'react-native-gesture-handler';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-snap-carousel';


// import CustomText from '../components/CustomText';
// import { Spacing } from '../styles/Global';

interface Props {
  route: any;
}
interface State {
}

class ViewDiaryItem extends React.Component<Props, State>{
  private readonly diaryItem: DiaryItem = this.props.route.params.diaryItem;
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = data => {
    return (
      <Lightbox>
        <Image
          style={{ height: hp('45%'), width: wp('100%') }}
          source={{ uri: data.item }}
        />
      </Lightbox>
    );
  };

  render() {
    // console.log(this.props.route);
    return (
      <Container
        containerStyles={{
          justifyContent: 'flex-start',
        }}>
        <ScrollView>
          <View>
            <Carousel
              containerCustomStyle={{ height: 'auto', alignSelf: 'center' }}
              sliderWidth={wp('100%')}
              itemWidth={wp('100%')}
              autoplay={true}
              loop={true}
              data={this.diaryItem.images}
              renderItem={this.renderItem}
            />
            <View style={{ padding: 10 }}>
              <DateNTime timeStamp={this.diaryItem.timeStamp} />
              <Text
                style={{
                  marginBottom: 10,
                  color: 'blue',
                  fontWeight: 'bold'
                }}>
                {this.diaryItem.subject}
              </Text>
              <Text>{this.diaryItem.description}</Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    )
  }
  componentDidMount(): void {
  }
}

export default ViewDiaryItem;
