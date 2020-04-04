import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { Icon } from "react-native-elements";
import TagInput from "../../../temp/libs/react-native-tags-mod";

const InputTags = ({placeholder = "", data, setData, tipo}) => {
    return (
        <TagInput
          initialText=""
          textInputProps={{
            placeholder
          }}
          label="test"
          initialTags={data}
          inputStyle={{
            backgroundColor: "rgba(250,250,250,0)",
            borderBottomWidth: 2,
            borderBottomColor: "white",
          }}
          inputContainerStyle={{ backgroundColor: "rgba(250,250,250,0)" }}
          onChangeTags={(_tags) => setData({type: `SET_${tipo}`, value: _tags})}
          createTagOnString={[","]}
          renderTag={({ tag, index, onPress }) => (
            <TouchableOpacity
              key={`${tag}-${index}`}
              onPress={onPress}
              style={{
                backgroundColor: "white",
                marginHorizontal: 5,
                marginTop: 5,
                borderRadius: 10,
                minHeight: 30,
                minWidth: 100,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{tag}</Text>
              <Icon name="clear" />
            </TouchableOpacity>
          )}
        />
    )
}

export default InputTags;