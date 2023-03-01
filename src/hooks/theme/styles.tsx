import { useEffect, useMemo, useState } from 'react';
import { Dimensions, FlexAlignType } from 'react-native';
import { useNormalizeSize } from './normalizeSize';
import { themeColor } from './theme';

const useStyles = () => {
  const { normalizeSize } = useNormalizeSize();
  const [schema, setSchema] = useState<'light' | 'dark'>('dark');

  // const changeSchemaColor = useCallback(
  //   ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  //     if (colorScheme != schema) {
  //       setSchema(s => colorScheme || s);
  //     }
  //   },
  //   [schema],
  // );

  useEffect(() => {
    // return () => {
    //   subscription.remove();
    // };
  }, []);

  const theme = useMemo(() => themeColor[schema], [schema]);

  const styles = useMemo(
    () => ({
      normalizeSize,
      screenWidth: () => ({
        width: Dimensions.get('screen').width,
      }),
      flex: (flex = 1) => ({ flex }),
      alignItems: (alignItems: FlexAlignType) => ({
        alignItems,
      }),
      justifyContent: (justifyContent: IJustifyContent) => ({
        justifyContent,
      }),
      wrap: (flexWrap: IWrap) => ({
        flexWrap,
      }),
      alignContent: (alignContent: IAlignContent) => ({ alignContent }),

      marginTop: (i: number | string) => ({
        marginTop: typeof i === 'string' ? i : normalizeSize(i),
      }),
      marginLeft: (i: number | string) => ({
        marginLeft: typeof i === 'string' ? i : normalizeSize(i),
      }),
      marginRight: (i: number | string) => ({
        marginRight: typeof i === 'string' ? i : normalizeSize(i),
      }),
      marginBottom: (i: number | string) => ({
        marginBottom: typeof i === 'string' ? i : normalizeSize(i),
      }),
      marginVertical: (i: number | string) => ({
        marginVertical: typeof i === 'string' ? i : normalizeSize(i),
      }),
      marginHorizontal: (i: number | string) => ({
        marginHorizontal: typeof i === 'string' ? i : normalizeSize(i),
      }),
      margin: (i: number | string) => ({
        margin: typeof i === 'string' ? i : normalizeSize(i),
      }),

      padding: (i: number | string) => ({
        padding: typeof i === 'string' ? i : normalizeSize(i),
      }),
      paddingTop: (i: number | string) => ({
        paddingTop: typeof i === 'string' ? i : normalizeSize(i),
      }),
      paddingLeft: (i: number | string) => ({
        paddingLeft: typeof i === 'string' ? i : normalizeSize(i),
      }),
      paddingRight: (i: number | string) => ({
        paddingRight: typeof i === 'string' ? i : normalizeSize(i),
      }),
      paddingBottom: (i: number | string) => ({
        paddingBottom: typeof i === 'string' ? i : normalizeSize(i),
      }),
      paddingVertical: (i: number | string) => ({
        paddingVertical: typeof i === 'string' ? i : normalizeSize(i),
      }),
      paddingHorizontal: (i: number | string) => ({
        paddingHorizontal: typeof i === 'string' ? i : normalizeSize(i),
      }),

      borderWidth: (i: number) => ({ borderWidth: normalizeSize(i) }),
      borderTopWidth: (i: number) => ({ borderTopWidth: normalizeSize(i) }),
      borderLeftWidth: (i: number) => ({ borderLeftWidth: normalizeSize(i) }),
      borderRightWidth: (i: number) => ({ borderRightWidth: normalizeSize(i) }),
      borderBottomWidth: (i: number) => ({
        borderBottomWidth: normalizeSize(i),
      }),
      borderRadius: (i: number) => ({ borderRadius: normalizeSize(i) }),
      borderTopLeftRadius: (i: number) => ({
        borderTopLeftRadius: normalizeSize(i),
      }),
      borderTopRightRadius: (i: number) => ({
        borderTopRightRadius: normalizeSize(i),
      }),
      borderBottomLeftRadius: (i: number) => ({
        borderBottomLeftRadius: normalizeSize(i),
      }),
      borderBottomRightRadius: (i: number) => ({
        borderBottomRightRadius: normalizeSize(i),
      }),

      borderColor: (i: keyof typeof theme.borders) => ({
        borderColor: theme.borders[i],
      }),

      width: (i: number | string) => ({
        width: typeof i === 'string' ? i : normalizeSize(i),
      }),
      height: (i: number | string) => ({
        height: typeof i === 'string' ? i : normalizeSize(i),
      }),
      minHeight: (i: number | string) => ({
        minHeight: typeof i === 'string' ? i : normalizeSize(i),
      }),
      maxHeight: (i: number | string) => ({
        maxHeight: typeof i === 'string' ? i : normalizeSize(i),
      }),

      left: (i: number | string) => ({
        left: typeof i === 'string' ? i : normalizeSize(i),
      }),
      right: (i: number | string) => ({
        right: typeof i === 'string' ? i : normalizeSize(i),
      }),
      top: (i: number | string) => ({
        top: typeof i === 'string' ? i : normalizeSize(i),
      }),
      bottom: (i: number | string) => ({
        bottom: typeof i === 'string' ? i : normalizeSize(i),
      }),
      zIndex: (i: number) => ({
        zIndex: i,
      }),

      fontFamily: () => ({
        // fontFamly:
      }),
      boxShadow: (i: keyof typeof theme.shadows) => theme.shadows[i],
      fontAlign: (textAlign: ITextAlign) => ({ textAlign }),
      fontColor: (i: keyof typeof theme.fonts) => ({ color: theme.fonts[i] }),
      fontSize: (i: number) => ({ fontSize: normalizeSize(i) }),
      fontSpacing: (i: number) => ({ letterSpacing: normalizeSize(i) }),
      fontWeight: (fontWeight: IFontWeight) => ({ fontWeight }),
      opacity: (opacity: number) => ({ opacity }),
      bgColor: (i: keyof typeof theme.backgrounds) => ({
        backgroundColor: theme.backgrounds[i],
      }),
      container: () => ({
        flex: 1,
        width: '100%',
        backgroundColor: theme.backgrounds.primary,
        paddingHorizontal: normalizeSize(16),
      }),
      containerPadding: () => ({
        paddingHorizontal: normalizeSize(16),
      }),
      antiContainer: () => ({
        backgroundColor: theme.backgrounds.primary,
        marginLeft: -normalizeSize(16),
        marginRight: -normalizeSize(16),
      }),
      aspect9_16: (v: number) => {
        return Math.round((normalizeSize(v) / 9) * 16);
      },
      aspect3_4: (v: number) => {
        return Math.round((normalizeSize(v) / 3) * 4);
      },
      row: () => ({ flexDirection: 'row' } as { flexDirection: 'row' }),
      overflowHidden: () => ({ overflow: 'hidden' } as { overflow: 'hidden' }),
      relative: () => ({ position: 'relative' } as { position: 'relative' }),
      absolute: () => ({ position: 'absolute' } as { position: 'absolute' }),

      text1: () => ({
        fontFamily: 'Poppins',
        color: theme.fonts.primary,
        fontSize: normalizeSize(16),
        fontWeight: '400' as '400',
      }),

      text2: () => ({
        fontFamily: 'Poppins',
        color: theme.fonts.primary,
        fontSize: normalizeSize(14),
        fontWeight: '500' as '500',
      }),

      text3: () => ({
        fontFamily: 'Poppins',
        color: theme.fonts.primary,
        fontWeight: '300' as '300',
        fontSize: normalizeSize(16),
      }),

      text4: () => ({
        fontFamily: 'Poppins',
        color: theme.fonts.primary,
        fontWeight: '600' as '600',
        fontSize: normalizeSize(16),
      }),

      text5: () => ({
        fontFamily: 'Poppins',
        color: theme.fonts.primary,
        fontWeight: '700' as '700',
        fontSize: normalizeSize(32),
      }),
      text6: () => ({
        fontFamily: 'Poppins',
        color: theme.fonts.primary,
        fontWeight: '600' as '600',
        fontSize: normalizeSize(32),
      }),
      text7: () => ({
        fontFamily: 'Poppins',
        color: theme.fonts.primary,
        fontWeight: '600' as '600',
        fontSize: normalizeSize(18),
        lineHeight: normalizeSize(21),
      }),
      text8: () => ({
        fontFamily: 'Poppins',
        color: theme.fonts.primary,
        fontStyle: 'normal' as 'normal',
        fontSize: normalizeSize(10),
        fontWeight: '500' as '500',
      }),
    }),
    [normalizeSize, theme],
  );

  return { styles };
};

export { useStyles };
