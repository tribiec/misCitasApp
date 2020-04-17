export const token=async()=>{
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
   return  await Notifications.getExpoPushTokenAsync();
  } else {
    alert('Must use physical device for Push Notifications');
  return null;
  }
}

export const enviar_notificacion=async (token,name)=>{
  const message = {
    to: token,
    sound: 'default',
    title: 'match',
    body: 'has hecho mach con'+name,
    data: { data: 'goes here' },
    _displayInForeground: true,
  };
  const response = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

}
