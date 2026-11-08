import type { ReactNode } from 'react';
import { Text, TextInput, View } from 'react-native';
import type { TextInputProps } from 'react-native';

import { Palette } from '@/constants/theme';

type FormFieldProps = Pick<
  TextInputProps,
  | 'autoCapitalize'
  | 'autoComplete'
  | 'autoCorrect'
  | 'keyboardType'
  | 'onSubmitEditing'
  | 'returnKeyType'
  | 'secureTextEntry'
  | 'textContentType'
> & {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  trailingAction?: ReactNode;
};

export default function FormField({
  label,
  value,
  onChangeText,
  placeholder,
  trailingAction,
  ...inputProps
}: FormFieldProps) {
  return (
    <View className="gap-2">
      <Text className="text-[13px] font-semibold text-[#263D36]">{label}</Text>
      <View
        className={
          trailingAction
            ? 'h-[54px] flex-row items-center rounded-lg border border-[#659287] bg-white'
            : ''
        }>
        <TextInput
          accessibilityLabel={label}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Palette.muted}
          className={
            trailingAction
              ? 'h-full flex-1 px-4 text-[15px] text-[#263D36]'
              : 'h-[54px] rounded-lg border border-[#659287] bg-white px-4 text-[15px] text-[#263D36]'
          }
          value={value}
          {...inputProps}
        />
        {trailingAction}
      </View>
    </View>
  );
}
