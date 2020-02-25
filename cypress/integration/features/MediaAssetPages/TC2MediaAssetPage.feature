Feature: Media Asset Page (TC2)

    Scenario Outline: Verify TC2 MAP page with video content
        Given I navigate to <URL>
        Then the headline is displayed
        And a placeholder with the text "content is unavailable" is displayed
        Examples:
            | URL                                                                         |
            | afrique/nos_emissions/2014/11/141111_porno_vengeur_ouganda                  |
            | arabic/multimedia/2014/05/140515_kenia_children_sex_trade                   |
            | azeri/multimedia/2012/09/120919_georgia_prison_video                        |
            | bengali/multimedia/2016/08/160801_baghdad_rashid_street_100yrs_video        |
            | burmese/multimedia/2016/01/160108_korean_cook                               |
            | gahuza/video/2015/12/151201_100womenburundi                                 |
            | hausa/multimedia/2012/07/120712_click                                       |
            | hindi/multimedia/2015/07/150703_jharkhand_maoist_fake_surrender_sr          |
            | indonesia/bahasa_inggris/2016/08/160817_video_inggris                       |
            | kyrgyz/entertainment/2014/07/140725_egypt_tentmaking                        |
            | mundo/video_fotos/2016/05/160502_video_apnea_record_rubridge_nezolandes_amv |
            | nepali/multimedia/2013/08/130806_boudhavideo                                |
            | pashto/multimedia/2012/09/120928_naghma_video                               |
            | persian/arts/2011/08/110802_doublage_sherlock_promo                         |
            | portuguese/noticias/2016/03/160307_andes_vivos_tg                           |
            | russian/multimedia/2016/05/160505_v_diving_record                           |
            | sinhala/sri_lanka/2014/01/140120_disabled_soldiers_pay_292                  |
            | somali/maqal_iyo_muuqaal/2012/07/120731_olympicvideo                        |
            | swahili/medianuai/2013/04/130419_lead_posoning                              |
            | tamil/global/2014/07/140713_animalsvideo                                    |
            | turkce/multimedya/2016/02/160216_vid_genclerde_depresyon                    |
            | ukrainian/multimedia/2014/05/140508_biggest_dinosaur_found_ag               |
            | urdu/multimedia/2014/11/141104_hindu_riaz_kq                                |
            | uzbek/multimedia/2013/12/131221_sectarian_war_bowen                         |
            | vietnamese/multimedia/2015/04/150428_david_wheat_interview                  |


# # Scenario Outline: Verify Legacy MAP page without video content - variants - ERROR no data
# #     Given I navigate to <URL>
# #     Then a page is displayed
# #     Examples:
# #         | ukchina/trad/multimedia/2015/11/151120_video_100w_london_chinese_entrepreneurs |
# #         | zhongwen/simp/multimedia/2016/05/160511_vid_cultural_revolution_explainer      |

# # Scenario Outline: Verify TC2 MAP page with audio content
# #     Given I navigate to <URL>
# #     Examples:
# # Audio content example
# | URL |
# | bengali/multimedia/2014/02/140206_fp_witness_mother_teresa |


