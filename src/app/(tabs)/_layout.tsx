import { Slot, Stack, Tabs, Redirect } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAuth } from "../../providers.tsx/AnthProvider";
export default function TabsLayout(){
   
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Redirect href={'/login'} />;
    }
    
    return(
        <Tabs>
            <Tabs.Screen name="allocations" 
            options={{
                title:'Allocation', 
                headerShown:false,
                tabBarIcon: ({size, color}) =>  (
                    <MaterialIcons 
                        name="account-tree" 
                        size={24} 
                        color="black" />
                ),
                }}
            />


            <Tabs.Screen name="accounts" 
            options={{
                title:'Accounts',
               // headerShown:false,
                tabBarIcon: ({size, color}) =>  (
                                                                                                                                                                     



                        <MaterialIcons 
                    name="account-box" 
                    size={size} 
                    color={color} 
                    />
                ),
                }}
            />


            {/* <Tabs.Screen name="index" options={{href:null}}/> */}



                
                
        </Tabs>
        
    ) 
    
}