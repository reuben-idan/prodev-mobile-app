import { View, Text, FlatList, TouchableOpacity } from 'react-native';

type Message = {
  id: string;
  from: string;
  subject: string;
  preview: string;
  time: string;
  read: boolean;
};

const messages: Message[] = [
  {
    id: '1',
    from: 'Sarah Johnson',
    subject: 'Property Viewing Request',
    preview: 'Hi, I would like to schedule a viewing for the property on 123 Main St...',
    time: '10:30 AM',
    read: false,
  },
  {
    id: '2',
    from: 'Michael Brown',
    subject: 'Question about the property',
    preview: 'Hello, I have a few questions about the property listing...',
    time: 'Yesterday',
    read: true,
  },
  {
    id: '3',
    from: 'Lisa Wilson',
    subject: 'Document Submission',
    preview: 'I have submitted all the required documents for...',
    time: 'Mar 12',
    read: true,
  },
];

export default function InboxScreen() {
  const renderMessage = ({ item }: { item: Message }) => (
    <TouchableOpacity 
      className={`p-4 border-b border-gray-100 ${!item.read ? 'bg-blue-50' : ''}`}
    >
      <View className="flex-row justify-between items-start mb-1">
        <Text className={`font-medium ${!item.read ? 'font-bold' : ''}`}>
          {item.from}
        </Text>
        <Text className="text-xs text-gray-500">{item.time}</Text>
      </View>
      <Text className={`font-medium ${!item.read ? 'font-bold' : ''} mb-1`}>
        {item.subject}
      </Text>
      <Text className="text-gray-600 text-sm" numberOfLines={1}>
        {item.preview}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      <View className="p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold">Inbox</Text>
      </View>
      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
