import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface ButtonProps extends Omit<PressableProps, "style"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  size?: "small" | "medium" | "large";
  style?: StyleProp<ViewStyle>;
}

export function Button({
  onPress,
  children,
  style,
  variant = "primary",
  size = "medium",
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      style={[styles.button, styles[variant], styles[size], style]}
      onPress={onPress}
      {...rest}
    >
      {typeof children === "string" ? (
        <Text style={[styles.buttonText, styles[`${variant}Text`]]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  primary: {
    backgroundColor: "#007AFF",
  },
  secondary: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  text: {
    backgroundColor: "transparent",
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#007AFF",
  },
  textText: {
    color: "#007AFF",
  },
});
