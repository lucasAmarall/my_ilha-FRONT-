export const db: () => TCurrentSpotReducer = () => {
  const id = Math.random();
  return {
    id: id,
    name: `Spot test ${id}`,
    store: {
      id: 'store_test_1',
      name: 'Store test 01',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevfIayrB0VB4ut4qCy-rsNJIofCcvbWi_dg&usqp=CAU',
      header_carrousel: [
        `https://via.placeholder.com/150/FFFF00/000000?text=Spot_test_${id}`,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcvUf5k2gBcKua-wx5mqBavvIS0Hi-OZ3-suwRf6Rric-KbcmjJc6fmVaAaDv-DPbJko&usqp=CAU',
        'https://me-gestao-imagens.s3.amazonaws.com/minhaentrada/gestao/fotos/15782_banner6.jpg',
        'https://me-gestao-imagens.s3.amazonaws.com/minhaentrada/gestao/fotos/18315_banner6.jpg',
      ],
      sections: [
        {
          id: 'ofertas_1',
          title: 'Ofertas',
          type: 'a',
          products: [
            {
              id: 'ofertas_1_product_1',
              name: 'Combo red label',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5ESHc29UtYUrgMWkeUKJu9ZXA03RDGXvGg&usqp=CAU',
              isOffer: true,
              price: '200',
              offer_price: '150',
            },
            {
              id: 'ofertas_1_product_2',
              name: 'Combo Jack Daniels',
              image:
                'https://media.gazetadopovo.com.br/2021/04/09131704/JackFire_1920x10801-960x540.jpg',
              isOffer: true,
              price: '300',
              offer_price: '250',
            },
          ],
        },
        {
          id: 'ofertas_2',
          type: 'b',
          title: 'Energéticos',
          products: [
            {
              id: 'ofertas_2_product_1',
              name: 'Monster Ultra',
              image:
                'https://uploads.consultaremedios.com.br/product_variation_images/full/f52a7034f10367cbda85465845cce787b9d9493c.jpg?1525803943',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_2_product_2',
              name: 'Monster Juice',
              image:
                'https://hiperideal.vteximg.com.br/arquivos/ids/197329-1000-1000/2056836.jpg?v=637828864926670000',
              isOffer: false,
              price: '300',
            },
            {
              id: 'ofertas_2_product_3',
              name: 'Monster Orange',
              image:
                'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/49826/medium/energetico-monster-473ml-lt-peach_96098.png',
              isOffer: true,
              price: '12',
              offer_price: '10',
            },
            {
              id: 'ofertas_2_product_4',
              name: 'Monster Limão',
              image:
                'https://www.imigrantesbebidas.com.br/bebida/images/products/full/88917-energetico-monster-energy-ultra-paradise-lata-473ml.jpg',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_2_product_5',
              name: 'Monster Uva',
              image: 'https://deskontao.agilecdn.com.br/30997_1.jpg',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_2_product_6',
              name: 'Monster Mango Loco',
              image:
                'https://m.media-amazon.com/images/I/81xbuWbFlUL._AC_SL1500_.jpg',
              isOffer: false,
              price: '12',
            },
          ],
        },
        {
          id: 'ofertas_3',
          type: 'b',
          title: 'Cervejas Especiais',
          products: [
            {
              id: 'ofertas_3_product_1',
              name: "Cerveja Beck's",
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhKCPogKfV7oX1iGfoGc1pw17UTjmkRnH3w&usqp=CAU',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_3_product_2',
              name: 'Cerveja Patricia',
              image:
                'https://www.oemporio.com.br/produtos/fotos/grande/2742-patricia_960ml_cerveja_logo.jpg',
              isOffer: false,
              price: '10',
            },
            {
              id: 'ofertas_3_product_3',
              name: 'Cerveja Farrapos',
              image:
                'https://cdn.dooca.store/8177/products/cerveja-artesanal-farrapos-red-ale-sem-gluten-355-ml.jpg?v=1654264939',
              isOffer: true,
              price: '12',
              offer_price: '8',
            },
            {
              id: 'ofertas_3_product_4',
              name: 'Cerveja Spaten',
              image:
                'https://www.imigrantesbebidas.com.br/bebida/images/products/full/88941-cerveja-spaten-long-neck-355ml.jpg',
              isOffer: false,
              price: '15',
            },
            {
              id: 'ofertas_3_product_5',
              name: 'Cerveja Heineken',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbN8Gnst1yZRVUSH8rxWlC8EE84TKfDnerY0bjOPEef_QeSRMqpmetfM1Nudzd-CWJqA&usqp=CAU',
              isOffer: false,
              price: '12',
            },
          ],
        },
        {
          id: 'ofertas_4',
          type: 'c',
          title: 'Drinks da casa',
          products: [
            {
              id: 'ofertas_4_product_1',
              name: 'Caipiranha',
              image:
                'https://samoaresort.com.br/wp-content/uploads/2021/09/drinks-que-fazem-sucesso-no-nordeste-samoa-resort.jpeg',
              isOffer: false,
              price: '15',
            },
            {
              id: 'ofertas_4_product_2',
              name: 'Beach Dream',
              image:
                'https://territoriosecreto.com.br/wp-content/uploads/2021/04/drink.jpg',
              isOffer: false,
              price: '20',
            },
            {
              id: 'ofertas_4_product_3',
              name: 'Gin',
              image:
                'https://www.receitasedicasdochef.com.br/wp-content/uploads/2021/12/Drinks-Para-a-Ceia-de-Natal.webp',
              isOffer: true,
              price: '19',
              offer_price: '15',
            },
            {
              id: 'ofertas_4_product_4',
              name: 'Red bloud',
              image:
                'https://portaledicase.com/wp-content/uploads/2022/12/shutterstock_image.jpg',
              isOffer: false,
              price: '9.50',
            },
            {
              id: 'ofertas_4_product_5',
              name: 'Kitou Padrão (copo)',
              image:
                'https://www.conceitobar.com.br/wp-content/uploads/2016/03/bebidas-alcoolicas-com-energetico-1024x444.jpg',
              isOffer: false,
              price: '12',
            },
          ],
        },
        {
          id: 'ofertas_5',
          type: 'b',
          title: 'Gelos',
          products: [
            {
              id: 'ofertas_5_product_1',
              name: 'Puro Suco',
              image:
                'https://bebobreja.com/wp-content/uploads/2021/04/Gelo-de-coco-Puro-Coco-1.png',
              isOffer: false,
              price: '8',
            },
            {
              id: 'ofertas_5_product_2',
              name: 'Kero Coco',
              image:
                'https://a-static.mlcdn.com.br/1500x1500/gelo-de-coco-kero-coco/atacadistawm/c4b3a22e5f8211ec87084201ac18503a/6aaba43df5805d83cdad304d6e0ce514.jpeg',
              isOffer: false,
              price: '8',
            },
            {
              id: 'ofertas_5_product_3',
              name: 'Coco Quadrado',
              image:
                'https://cf.shopee.com.br/file/6b37d99bcbd46d02b7078a7e429b3088',
              isOffer: true,
              price: '12',
              offer_price: '6.50',
            },
            {
              id: 'ofertas_5_product_4',
              name: 'Coco Leve',
              image:
                'https://s3-sa-east-1.amazonaws.com/bluesoft-erp/sc/ecommerce/produtos/fotos/52cd8cb1-b0c3-441a-a6dd-983d99fa4e32/foto_large.jpg',
              isOffer: false,
              price: '15',
            },
            {
              id: 'ofertas_5_product_5',
              name: 'Maça verde',
              image:
                'https://cocogeladooficial.com.br/wp-content/uploads/2022/04/maca_Prancheta-1-1024x1024.png',
              isOffer: false,
              price: '12',
            },
          ],
        },
        {
          id: 'ofertas_6',
          type: 'b',
          title: 'Energéticos',
          products: [
            {
              id: 'ofertas_6_product_1',
              name: 'Monster Ultra',
              image:
                'https://uploads.consultaremedios.com.br/product_variation_images/full/f52a7034f10367cbda85465845cce787b9d9493c.jpg?1525803943',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_6_product_2',
              name: 'Monster Juice',
              image:
                'https://hiperideal.vteximg.com.br/arquivos/ids/197329-1000-1000/2056836.jpg?v=637828864926670000',
              isOffer: false,
              price: '300',
            },
            {
              id: 'ofertas_6_product_3',
              name: 'Monster Orange',
              image:
                'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/49826/medium/energetico-monster-473ml-lt-peach_96098.png',
              isOffer: true,
              price: '12',
              offer_price: '10',
            },
            {
              id: 'ofertas_6_product_4',
              name: 'Monster Limão',
              image:
                'https://www.imigrantesbebidas.com.br/bebida/images/products/full/88917-energetico-monster-energy-ultra-paradise-lata-473ml.jpg',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_6_product_5',
              name: 'Monster Uva',
              image: 'https://deskontao.agilecdn.com.br/30997_1.jpg',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_6_product_6',
              name: 'Monster Mango Loco',
              image:
                'https://m.media-amazon.com/images/I/81xbuWbFlUL._AC_SL1500_.jpg',
              isOffer: false,
              price: '12',
            },
          ],
        },
        {
          id: 'ofertas_7',
          type: 'e',
          title: 'Petiscos',
          products: [
            {
              id: 'ofertas_7_product_1',
              name: 'Batata Frita (porção)',
              image:
                'https://cdn.panelinha.com.br/receita/953607600000-Batata-frita-tradicional.jpg',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_7_product_2',
              name: 'Tabua Salame',
              image:
                'https://www.receiteria.com.br/wp-content/uploads/receitas-de-petiscos-de-boteco-4.jpg',
              isOffer: false,
              price: '300',
            },
            {
              id: 'ofertas_7_product_3',
              name: 'Croquetes',
              image:
                'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/29/596062048-croquete-de-mandioca-com-salame.jpg',
              isOffer: true,
              price: '14',
              offer_price: '10',
            },
            {
              id: 'ofertas_7_product_4',
              name: 'Amendois',
              image:
                'https://cdn.leroymerlin.com.br/products/petisqueira_para_servir_petiscos_molhos_e_fondues_vermelho_1567097365_2737_600x600.jpg',
              isOffer: false,
              price: '18',
            },
            {
              id: 'ofertas_7_product_5',
              name: 'Tabua Salame',
              image:
                'https://www.receiteria.com.br/wp-content/uploads/receitas-de-petiscos-de-boteco-4.jpg',
              isOffer: false,
              price: '300',
            },
            {
              id: 'ofertas_7_product_6',
              name: 'Croquetes',
              image:
                'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/29/596062048-croquete-de-mandioca-com-salame.jpg',
              isOffer: true,
              price: '14',
              offer_price: '10',
            },
          ],
        },
        {
          id: 'ofertas_22',
          type: 'd',
          title: 'Energéticos',
          products: [
            {
              id: 'ofertas_22_product_1',
              name: 'Monster Ultra',
              image:
                'https://uploads.consultaremedios.com.br/product_variation_images/full/f52a7034f10367cbda85465845cce787b9d9493c.jpg?1525803943',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_22_product_2',
              name: 'Monster Juice',
              image:
                'https://hiperideal.vteximg.com.br/arquivos/ids/197329-1000-1000/2056836.jpg?v=637828864926670000',
              isOffer: false,
              price: '300',
            },
            {
              id: 'ofertas_22_product_3',
              name: 'Monster Orange',
              image:
                'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/49826/medium/energetico-monster-473ml-lt-peach_96098.png',
              isOffer: true,
              price: '12',
              offer_price: '10',
            },
            {
              id: 'ofertas_22_product_4',
              name: 'Monster Limão',
              image:
                'https://www.imigrantesbebidas.com.br/bebida/images/products/full/88917-energetico-monster-energy-ultra-paradise-lata-473ml.jpg',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_22_product_5',
              name: 'Monster Uva',
              image: 'https://deskontao.agilecdn.com.br/30997_1.jpg',
              isOffer: false,
              price: '12',
            },
            {
              id: 'ofertas_22_product_6',
              name: 'Monster Mango Loco',
              image:
                'https://m.media-amazon.com/images/I/81xbuWbFlUL._AC_SL1500_.jpg',
              isOffer: false,
              price: '12',
            },
          ],
        },
      ],
    },
  };
};
