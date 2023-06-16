import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    main:{
      display:"flex",
      alignItems:"center",   //align items is horizontal 
      
    },
    sectionContainer: {
     
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    options:{
      backgroundColor:"#1c1a1a",
      paddingHorizontal: 24,
      width:"100%",
      height:"9%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:'space-between'
    },
    card:{
      backgroundColor:"#bf8563",
      width:"48%",
      height:"40%",
      borderBottomEndRadius:20
    },
    card_container:{
      backgroundColor:"#1f1e1e",
      width:"95%",
      height:"60%",
      display:"flex",
      gap:5,
      flexDirection:'row',
      justifyContent:"center",
      flexWrap:'wrap',paddingTop:5,
      borderBottomStartRadius:20,
      borderBottomEndRadius:20
    },
    button_style:{
      backgroundColor:"#1c1a1a"
    },
    appTitle:{
      display:"flex",
      justifyContent:"center",alignItems:"center",
      height:"10%",
      width:"100%"
    }
  
  });


// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }