import { ModelViewPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { parseWork } from "@realsee/five";
import MiniModelPanel from "./MiniModelPanel";
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

export const works = [
  {
    data: {
      "_signature": "C7r+R4l20dLG2XjgO02LcK1wb8xIx6yJ990pSMXLGB87jOT3GAVUvLhNPCiQzZV+2oXs7nGwolOeXNLU6JTNDzZkJXh5lKXohFeqzcnaNVvmuJcYp2DZoN3xcCZV0SxupZpBnzg0tVoMD9YlA7q2GNcJUxRYNQTiPRH6yAoCTYA=",
      "allow_hosts": [
        "realsee.com",
        "realsee.cn",
        "rushivr.com",
        "rushivr.cn",
        "bookan.com.cn",
        "bs.bookan.com.cn",
        "crm-inner.bookan.com.cn",
        "vrar.bookan.com.cn"
      ],
      "base_url": "https://vrlab-public.ljcdn.com/release/auto3dhd/b311c63ea52db657a122e2fd36a9caa0/",
      "certificate": "-----BEGIN CERTIFICATE-----\nMIIEMzCCAhsCCQDYAS/7ATZRmTANBgkqhkiG9w0BAQsFADCBkzELMAkGA1UEBhMC\nQ04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWppbmcxFDASBgNVBAoM\nC2xpYW5qaWEuY29tMRAwDgYDVQQLDAdSZWFsc2VlMREwDwYDVQQDDAhIYXJkd2Fy\nZTElMCMGCSqGSIb3DQEJARYWbml1aGFpcWluZ0BsaWFuamlhLmNvbTAeFw0yMTA5\nMTAwNTIwMDBaFw0zMTA5MDgwNTIwMDBaMIGmMQswCQYDVQQGEwJDTjEQMA4GA1UE\nCAwHQmVpSmluZzEQMA4GA1UEBwwHQmVpSmluZzEQMA4GA1UECgwHUmVhbHNlZTEZ\nMBcGA1UECwwQUmVhbHNlZUFwcEdldHdheTEgMB4GA1UEAwwXYXBwLWdhdGV3YXku\ncmVhbHNlZS5jb20xJDAiBgkqhkiG9w0BCQEWFWRldmVsb3BlckByZWFsc2VlLmNv\nbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuv/y3Ezsy/wh3LCA8vomPbgI\nSO9iO5kyR+oAetklD+epMU6J/ZbvTDEomZxuS5iyyKGBupzAh2ZFLIy7tsE71Vx1\nIIvT7Kdyq66lMU4YzdrpKUcxv7oOQnO8DA1orKluNa4jkyXBywHKs/Q+20LVc+RD\ngKXqFGJUdo8mAxEScs0CAwEAATANBgkqhkiG9w0BAQsFAAOCAgEAkMxsU4VLPd4J\n0rElBNBIyqPtvnlTs6VkhIK0l4oM58wtDKc1uG9UPSX5j29NguZM6LOe0jCsU2Vg\nEpUseMWQjx4o2yBg7MokQyjWc1zu6PppKhQ+RqHQy/biJ2zsIMpX3oMASXffvnW5\nn4Bjyo1JdDJiLm1fLvLlVVxQoraJD+rtpqWDEYixGVREUo5OIL5Y5dVjkHG2r9RQ\nQuu3yEiyr9gAW8yhz3YR6/sJ6boyGK8NC0v8Jih7NnCdT+9ML+3jn3P5F3TeXdSf\nVeYIm5oWAOTe3AjjKP8ARMb2RYACjg80/AcowD/dvRRjbwQmyucUNug2pXJynXpD\nNfx1IBmUmzSAT1Z5yNuY/f3VRBJvmIQ6Jpmef+g0/wUJpyS4SObguItyYlFPLqRH\nK1oKqNX/uV0GWWEQl6Lml986TzlHxc4ljtHBhjzlKYIYYZLWWipk4JiB8hxJcTK+\ncrgvclEQSxFlmAyoqxYFClrOOsPqZJdBhDTvoUWnnWuJLQt7DLHpyInp+S75Gg3o\n0zgHpt9m26B3YbjQGYMQlYmhl2VLQa+Ey0W8UZQXLcTvoRT4p+8crqr6cNNsxCyZ\nm08vBbEMIMvhBeLQvpM75oaMBmelegipFl2eelxVIHdGJWoyJSZQUdXN0uSidhZp\nI7AIgzhqK1Ku/IXK0OSXJonn+/9X/VI=\n-----END CERTIFICATE-----",
      "create_time": "2022-04-08T14:07:48+08:00",
      "expire_at": "1653384474004",
      "model": {
        "file_url": "model/auto3d-oreple27jV5SmDM7jWlvjg.at3d",
        "material_base_url": "materials/",
        "material_textures": [
          "texture_0.jpg",
          "texture_1.jpg",
          "texture_2.jpg"
        ],
        "modify_time": "2022-04-26T09:28:57+08:00",
        "type": 0
      },
      "observers": [
        {
          "accessible_nodes": [
            1,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "floor_index": 0,
          "index": 0,
          "offset_point_count": 0,
          "position": [
            -0.011105700396001339,
            0.27323299646377563,
            0.019628800451755524
          ],
          "quaternion": {
            "w": 0.0772597857480534,
            "x": -0.006613052229012577,
            "y": -0.9968998508285655,
            "z": 0.01333687057623544
          },
          "standing_position": [
            -0.011105700396001339,
            -1.0376542458669542,
            0.019628800451755524
          ],
          "visible_nodes": [
            1,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11
          ]
        },
        {
          "accessible_nodes": [
            0,
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "floor_index": 0,
          "index": 1,
          "offset_point_count": 0,
          "position": [
            -0.061466000974178314,
            0.2701979875564575,
            -4.527699947357178
          ],
          "quaternion": {
            "w": -0.021523422726513697,
            "x": -0.009159575565570233,
            "y": -0.9995851177627922,
            "z": 0.016805572888143765
          },
          "standing_position": [
            -0.061466000974178314,
            -1.0349758387963948,
            -4.527699947357178
          ],
          "visible_nodes": [
            0,
            6,
            7,
            8,
            9,
            10,
            11
          ]
        },
        {
          "accessible_nodes": [
            3,
            4,
            5,
            6,
            10,
            11
          ],
          "floor_index": 0,
          "index": 2,
          "offset_point_count": 0,
          "position": [
            0.07994689792394638,
            0.2750239968299866,
            -8.134349822998047
          ],
          "quaternion": {
            "w": 0.019680174366827383,
            "x": -0.011580027636312551,
            "y": -0.9996872278674018,
            "z": 0.010200715412168965
          },
          "standing_position": [
            0.07994689792394638,
            -1.032062868467328,
            -8.134349822998047
          ],
          "visible_nodes": [
            3,
            4,
            5,
            6,
            10,
            11
          ]
        },
        {
          "accessible_nodes": [
            2,
            4,
            5,
            6,
            9,
            10,
            11
          ],
          "floor_index": 0,
          "index": 3,
          "offset_point_count": 0,
          "position": [
            0.39653000235557556,
            0.2676070034503937,
            -12.123700141906738
          ],
          "quaternion": {
            "w": -0.007998702145221633,
            "x": -0.009020563871383143,
            "y": -0.9998686003782429,
            "z": 0.010836977028449138
          },
          "standing_position": [
            0.39653000235557556,
            -1.0477390055634932,
            -12.123700141906738
          ],
          "visible_nodes": [
            2,
            4,
            5,
            6,
            9,
            10,
            11
          ]
        },
        {
          "accessible_nodes": [
            0,
            2,
            3,
            5,
            6,
            7,
            9,
            10,
            11,
            12
          ],
          "floor_index": 0,
          "index": 4,
          "offset_point_count": 0,
          "position": [
            6.974649906158447,
            0.27453699707984924,
            -12.091699600219727
          ],
          "quaternion": {
            "w": -0.0074758996020693295,
            "x": -0.00794255005697003,
            "y": -0.9998964986286613,
            "z": 0.009381625908687866
          },
          "standing_position": [
            6.974649906158447,
            -1.0275389102765893,
            -12.091699600219727
          ],
          "visible_nodes": [
            0,
            2,
            3,
            5,
            6,
            7,
            9,
            10,
            11,
            12
          ]
        },
        {
          "accessible_nodes": [
            0,
            2,
            3,
            4,
            6,
            7,
            8,
            10,
            11
          ],
          "floor_index": 0,
          "index": 5,
          "offset_point_count": 0,
          "position": [
            15.04520034790039,
            0.2741129994392395,
            -11.87600040435791
          ],
          "quaternion": {
            "w": 0.02602970042002361,
            "x": -0.007828964879681446,
            "y": -0.9995482512163133,
            "z": 0.012823789685469458
          },
          "standing_position": [
            15.04520034790039,
            -1.0252786915994907,
            -11.87600040435791
          ],
          "visible_nodes": [
            0,
            2,
            3,
            4,
            6,
            7,
            8,
            10,
            11
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            3,
            4,
            5,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14
          ],
          "floor_index": 0,
          "index": 6,
          "offset_point_count": 0,
          "position": [
            6.428989887237549,
            0.274042010307312,
            0.3192789852619171
          ],
          "quaternion": {
            "w": 0.05864945450918956,
            "x": -0.007591798774227184,
            "y": -0.9981727446075234,
            "z": 0.012400440565367425
          },
          "standing_position": [
            6.428989887237549,
            -1.0370180358644125,
            0.3192789852619171
          ],
          "visible_nodes": [
            0,
            1,
            2,
            3,
            4,
            5,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            4,
            5,
            6,
            8,
            9,
            10,
            11,
            13,
            14
          ],
          "floor_index": 0,
          "index": 7,
          "offset_point_count": 0,
          "position": [
            14.847800254821777,
            0.28540799021720886,
            0.32635200023651123
          ],
          "quaternion": {
            "w": 0.05811268128415123,
            "x": -0.009332255581588025,
            "y": -0.9981723713964721,
            "z": 0.013701815120315451
          },
          "standing_position": [
            14.847800254821777,
            -1.0424081169600976,
            0.32635200023651123
          ],
          "visible_nodes": [
            0,
            1,
            4,
            5,
            6,
            8,
            9,
            10,
            11,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            5,
            6,
            7,
            9,
            10,
            11,
            12,
            13,
            14
          ],
          "floor_index": 0,
          "index": 8,
          "offset_point_count": 0,
          "position": [
            14.451600074768066,
            0.2873069941997528,
            -3.7856600284576416
          ],
          "quaternion": {
            "w": -0.08918958566217179,
            "x": -0.004705242217849947,
            "y": -0.9958987325610666,
            "z": 0.014449763070823726
          },
          "standing_position": [
            14.451600074768066,
            -1.0268961611874092,
            -3.7856600284576416
          ],
          "visible_nodes": [
            0,
            1,
            5,
            6,
            7,
            9,
            10,
            11,
            12,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            3,
            4,
            6,
            7,
            8,
            10,
            11,
            12
          ],
          "floor_index": 0,
          "index": 9,
          "offset_point_count": 0,
          "position": [
            6.496530055999756,
            0.2782059907913208,
            -4.029640197753906
          ],
          "quaternion": {
            "w": -0.021203149890880065,
            "x": -0.0030758362566910835,
            "y": -0.9996887631660247,
            "z": 0.01278017552697414
          },
          "standing_position": [
            6.496530055999756,
            -1.0293104667336312,
            -4.029640197753906
          ],
          "visible_nodes": [
            0,
            1,
            3,
            4,
            6,
            7,
            8,
            10,
            11,
            12
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            11,
            12,
            13,
            14
          ],
          "floor_index": 0,
          "index": 10,
          "offset_point_count": 0,
          "position": [
            20.601999282836914,
            0.28637000918388367,
            -4.671889781951904
          ],
          "quaternion": {
            "w": -0.008744785534512496,
            "x": -0.01229861683909254,
            "y": -0.999729865065759,
            "z": 0.017676722467750886
          },
          "standing_position": [
            20.601999282836914,
            -1.0294961910557947,
            -4.671889781951904
          ],
          "visible_nodes": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            11,
            12,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            12,
            13,
            14
          ],
          "floor_index": 0,
          "index": 11,
          "offset_point_count": 0,
          "position": [
            26.459199905395508,
            0.2907179892063141,
            -4.66963005065918
          ],
          "quaternion": {
            "w": 0.0063505762866206995,
            "x": -0.01861538410899325,
            "y": -0.9996182487901878,
            "z": 0.019403336076930257
          },
          "standing_position": [
            26.459199905395508,
            -1.020246040510073,
            -4.66963005065918
          ],
          "visible_nodes": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            12,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            4,
            6,
            8,
            9,
            10,
            11,
            13,
            14
          ],
          "floor_index": 0,
          "index": 12,
          "offset_point_count": 0,
          "position": [
            31.002099990844727,
            0.2958900034427643,
            -4.827889919281006
          ],
          "quaternion": {
            "w": -0.026292345254787047,
            "x": -0.006052480893351741,
            "y": -0.9995200078086615,
            "z": 0.015226031941777287
          },
          "standing_position": [
            31.002099990844727,
            -1.0137685144377455,
            -4.827889919281006
          ],
          "visible_nodes": [
            4,
            6,
            8,
            9,
            10,
            11,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            6,
            7,
            8,
            10,
            11,
            12,
            14
          ],
          "floor_index": 0,
          "index": 13,
          "offset_point_count": 0,
          "position": [
            31.13330078125,
            0.2876330018043518,
            -11.003399848937988
          ],
          "quaternion": {
            "w": 0.0012828094384588033,
            "x": -0.006015118308809886,
            "y": -0.9998969829664123,
            "z": 0.012969289050452935
          },
          "standing_position": [
            31.13330078125,
            -1.0269323133722392,
            -11.003399848937988
          ],
          "visible_nodes": [
            6,
            7,
            8,
            10,
            11,
            12,
            14
          ]
        },
        {
          "accessible_nodes": [
            6,
            7,
            8,
            10,
            11,
            12,
            13
          ],
          "floor_index": 0,
          "index": 14,
          "offset_point_count": 0,
          "position": [
            24.973899841308594,
            0.2902179956436157,
            -10.971799850463867
          ],
          "quaternion": {
            "w": 0.048497639887756176,
            "x": -0.001819550354615689,
            "y": -0.99863931350487,
            "z": 0.019083672894405736
          },
          "standing_position": [
            24.973899841308594,
            -1.0106977382702012,
            -10.971799850463867
          ],
          "visible_nodes": [
            6,
            7,
            8,
            10,
            11,
            12,
            13
          ]
        }
      ],
      "panorama": {
        "count": 15,
        "list": [
          {
            "back": "images/cube_2048/0/1af298bddf6e3836aa44d44fdda92ec4/0_b.jpg",
            "down": "images/cube_2048/0/1af298bddf6e3836aa44d44fdda92ec4/0_d.jpg",
            "front": "images/cube_2048/0/1af298bddf6e3836aa44d44fdda92ec4/0_f.jpg",
            "index": 0,
            "left": "images/cube_2048/0/1af298bddf6e3836aa44d44fdda92ec4/0_l.jpg",
            "right": "images/cube_2048/0/1af298bddf6e3836aa44d44fdda92ec4/0_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/0/1af298bddf6e3836aa44d44fdda92ec4/0_u.jpg"
          },
          {
            "back": "images/cube_2048/1/7ce1e1c838bd63bfb9e0a37690965b46/1_b.jpg",
            "down": "images/cube_2048/1/7ce1e1c838bd63bfb9e0a37690965b46/1_d.jpg",
            "front": "images/cube_2048/1/7ce1e1c838bd63bfb9e0a37690965b46/1_f.jpg",
            "index": 1,
            "left": "images/cube_2048/1/7ce1e1c838bd63bfb9e0a37690965b46/1_l.jpg",
            "right": "images/cube_2048/1/7ce1e1c838bd63bfb9e0a37690965b46/1_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/1/7ce1e1c838bd63bfb9e0a37690965b46/1_u.jpg"
          },
          {
            "back": "images/cube_2048/2/f0c25a9498b58289b58ae0f87fad63ce/2_b.jpg",
            "down": "images/cube_2048/2/f0c25a9498b58289b58ae0f87fad63ce/2_d.jpg",
            "front": "images/cube_2048/2/f0c25a9498b58289b58ae0f87fad63ce/2_f.jpg",
            "index": 2,
            "left": "images/cube_2048/2/f0c25a9498b58289b58ae0f87fad63ce/2_l.jpg",
            "right": "images/cube_2048/2/f0c25a9498b58289b58ae0f87fad63ce/2_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/2/f0c25a9498b58289b58ae0f87fad63ce/2_u.jpg"
          },
          {
            "back": "images/cube_2048/3/a3050f06d6d8e0e5ff12cc95bc259260/3_b.jpg",
            "down": "images/cube_2048/3/a3050f06d6d8e0e5ff12cc95bc259260/3_d.jpg",
            "front": "images/cube_2048/3/a3050f06d6d8e0e5ff12cc95bc259260/3_f.jpg",
            "index": 3,
            "left": "images/cube_2048/3/a3050f06d6d8e0e5ff12cc95bc259260/3_l.jpg",
            "right": "images/cube_2048/3/a3050f06d6d8e0e5ff12cc95bc259260/3_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/3/a3050f06d6d8e0e5ff12cc95bc259260/3_u.jpg"
          },
          {
            "back": "images/cube_2048/4/f2e0fcd3079c0bfa217ed0cb977c4389/4_b.jpg",
            "down": "images/cube_2048/4/f2e0fcd3079c0bfa217ed0cb977c4389/4_d.jpg",
            "front": "images/cube_2048/4/f2e0fcd3079c0bfa217ed0cb977c4389/4_f.jpg",
            "index": 4,
            "left": "images/cube_2048/4/f2e0fcd3079c0bfa217ed0cb977c4389/4_l.jpg",
            "right": "images/cube_2048/4/f2e0fcd3079c0bfa217ed0cb977c4389/4_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/4/f2e0fcd3079c0bfa217ed0cb977c4389/4_u.jpg"
          },
          {
            "back": "images/cube_2048/5/6c696dc8209cdcd6e2d8dc1eb754a21f/5_b.jpg",
            "down": "images/cube_2048/5/6c696dc8209cdcd6e2d8dc1eb754a21f/5_d.jpg",
            "front": "images/cube_2048/5/6c696dc8209cdcd6e2d8dc1eb754a21f/5_f.jpg",
            "index": 5,
            "left": "images/cube_2048/5/6c696dc8209cdcd6e2d8dc1eb754a21f/5_l.jpg",
            "right": "images/cube_2048/5/6c696dc8209cdcd6e2d8dc1eb754a21f/5_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/5/6c696dc8209cdcd6e2d8dc1eb754a21f/5_u.jpg"
          },
          {
            "back": "images/cube_2048/6/53c60e841ddf7cd23e7efa9e5af108fa/6_b.jpg",
            "down": "images/cube_2048/6/53c60e841ddf7cd23e7efa9e5af108fa/6_d.jpg",
            "front": "images/cube_2048/6/53c60e841ddf7cd23e7efa9e5af108fa/6_f.jpg",
            "index": 6,
            "left": "images/cube_2048/6/53c60e841ddf7cd23e7efa9e5af108fa/6_l.jpg",
            "right": "images/cube_2048/6/53c60e841ddf7cd23e7efa9e5af108fa/6_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/6/53c60e841ddf7cd23e7efa9e5af108fa/6_u.jpg"
          },
          {
            "back": "images/cube_2048/7/9f775272505bc1978416a3ea0e656296/7_b.jpg",
            "down": "images/cube_2048/7/9f775272505bc1978416a3ea0e656296/7_d.jpg",
            "front": "images/cube_2048/7/9f775272505bc1978416a3ea0e656296/7_f.jpg",
            "index": 7,
            "left": "images/cube_2048/7/9f775272505bc1978416a3ea0e656296/7_l.jpg",
            "right": "images/cube_2048/7/9f775272505bc1978416a3ea0e656296/7_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/7/9f775272505bc1978416a3ea0e656296/7_u.jpg"
          },
          {
            "back": "images/cube_2048/8/b619f6313b54de6c6c426764f7c68810/8_b.jpg",
            "down": "images/cube_2048/8/b619f6313b54de6c6c426764f7c68810/8_d.jpg",
            "front": "images/cube_2048/8/b619f6313b54de6c6c426764f7c68810/8_f.jpg",
            "index": 8,
            "left": "images/cube_2048/8/b619f6313b54de6c6c426764f7c68810/8_l.jpg",
            "right": "images/cube_2048/8/b619f6313b54de6c6c426764f7c68810/8_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/8/b619f6313b54de6c6c426764f7c68810/8_u.jpg"
          },
          {
            "back": "images/cube_2048/9/9249dde07114b309aaf7dd53b2fb3455/9_b.jpg",
            "down": "images/cube_2048/9/9249dde07114b309aaf7dd53b2fb3455/9_d.jpg",
            "front": "images/cube_2048/9/9249dde07114b309aaf7dd53b2fb3455/9_f.jpg",
            "index": 9,
            "left": "images/cube_2048/9/9249dde07114b309aaf7dd53b2fb3455/9_l.jpg",
            "right": "images/cube_2048/9/9249dde07114b309aaf7dd53b2fb3455/9_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/9/9249dde07114b309aaf7dd53b2fb3455/9_u.jpg"
          },
          {
            "back": "images/cube_2048/10/21f8824030948efdb6cfd360eb3ae7ce/10_b.jpg",
            "down": "images/cube_2048/10/21f8824030948efdb6cfd360eb3ae7ce/10_d.jpg",
            "front": "images/cube_2048/10/21f8824030948efdb6cfd360eb3ae7ce/10_f.jpg",
            "index": 10,
            "left": "images/cube_2048/10/21f8824030948efdb6cfd360eb3ae7ce/10_l.jpg",
            "right": "images/cube_2048/10/21f8824030948efdb6cfd360eb3ae7ce/10_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/10/21f8824030948efdb6cfd360eb3ae7ce/10_u.jpg"
          },
          {
            "back": "images/cube_2048/11/e3de8bd09e893e2a301d92ff032d74bf/11_b.jpg",
            "down": "images/cube_2048/11/e3de8bd09e893e2a301d92ff032d74bf/11_d.jpg",
            "front": "images/cube_2048/11/e3de8bd09e893e2a301d92ff032d74bf/11_f.jpg",
            "index": 11,
            "left": "images/cube_2048/11/e3de8bd09e893e2a301d92ff032d74bf/11_l.jpg",
            "right": "images/cube_2048/11/e3de8bd09e893e2a301d92ff032d74bf/11_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/11/e3de8bd09e893e2a301d92ff032d74bf/11_u.jpg"
          },
          {
            "back": "images/cube_2048/12/765283f83b707b1178c67782b6a762da/12_b.jpg",
            "down": "images/cube_2048/12/765283f83b707b1178c67782b6a762da/12_d.jpg",
            "front": "images/cube_2048/12/765283f83b707b1178c67782b6a762da/12_f.jpg",
            "index": 12,
            "left": "images/cube_2048/12/765283f83b707b1178c67782b6a762da/12_l.jpg",
            "right": "images/cube_2048/12/765283f83b707b1178c67782b6a762da/12_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/12/765283f83b707b1178c67782b6a762da/12_u.jpg"
          },
          {
            "back": "images/cube_2048/13/291f565aee2b5767a4c31c08f78f16d1/13_b.jpg",
            "down": "images/cube_2048/13/291f565aee2b5767a4c31c08f78f16d1/13_d.jpg",
            "front": "images/cube_2048/13/291f565aee2b5767a4c31c08f78f16d1/13_f.jpg",
            "index": 13,
            "left": "images/cube_2048/13/291f565aee2b5767a4c31c08f78f16d1/13_l.jpg",
            "right": "images/cube_2048/13/291f565aee2b5767a4c31c08f78f16d1/13_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/13/291f565aee2b5767a4c31c08f78f16d1/13_u.jpg"
          },
          {
            "back": "images/cube_2048/14/261fa6aeee075764379966f7bdab97dc/14_b.jpg",
            "down": "images/cube_2048/14/261fa6aeee075764379966f7bdab97dc/14_d.jpg",
            "front": "images/cube_2048/14/261fa6aeee075764379966f7bdab97dc/14_f.jpg",
            "index": 14,
            "left": "images/cube_2048/14/261fa6aeee075764379966f7bdab97dc/14_l.jpg",
            "right": "images/cube_2048/14/261fa6aeee075764379966f7bdab97dc/14_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/14/261fa6aeee075764379966f7bdab97dc/14_u.jpg"
          }
        ]
      },
      "picture_url": "",
      "title_picture_url": "",
      "vr_code": "80o024DE6XeLY3j5BE",
      "vr_type": "reality"
    }
  },
  {
    data: {
      "_signature": "Hp1ujdIMhTavgBXkusKtGZuVYW1pk+0xBLoYZidKy7DcN5jMVLx0vScL0q/G6tVNeQ+tkJ5Lzi/v9ZDbbDpphOBsEL9gnjieYtZ6g9wR6zMkv+gWHRFn2fMe6xr0h2BZcGfFlbTN541tC7LqSiuTUGV0q51gQUNRsmaBCQhh16Y=",
      "allow_hosts": [
        "realsee.com",
        "realsee.cn",
        "rushivr.com",
        "rushivr.cn",
        "bookan.com.cn",
        "bs.bookan.com.cn",
        "crm-inner.bookan.com.cn",
        "vrar.bookan.com.cn"
      ],
      "base_url": "https://vrlab-public.ljcdn.com/release/auto3dhd/2d0bae9597991d69ddd482c6e024cee0/",
      "certificate": "-----BEGIN CERTIFICATE-----\nMIIEMzCCAhsCCQDYAS/7ATZRmTANBgkqhkiG9w0BAQsFADCBkzELMAkGA1UEBhMC\nQ04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWppbmcxFDASBgNVBAoM\nC2xpYW5qaWEuY29tMRAwDgYDVQQLDAdSZWFsc2VlMREwDwYDVQQDDAhIYXJkd2Fy\nZTElMCMGCSqGSIb3DQEJARYWbml1aGFpcWluZ0BsaWFuamlhLmNvbTAeFw0yMTA5\nMTAwNTIwMDBaFw0zMTA5MDgwNTIwMDBaMIGmMQswCQYDVQQGEwJDTjEQMA4GA1UE\nCAwHQmVpSmluZzEQMA4GA1UEBwwHQmVpSmluZzEQMA4GA1UECgwHUmVhbHNlZTEZ\nMBcGA1UECwwQUmVhbHNlZUFwcEdldHdheTEgMB4GA1UEAwwXYXBwLWdhdGV3YXku\ncmVhbHNlZS5jb20xJDAiBgkqhkiG9w0BCQEWFWRldmVsb3BlckByZWFsc2VlLmNv\nbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuv/y3Ezsy/wh3LCA8vomPbgI\nSO9iO5kyR+oAetklD+epMU6J/ZbvTDEomZxuS5iyyKGBupzAh2ZFLIy7tsE71Vx1\nIIvT7Kdyq66lMU4YzdrpKUcxv7oOQnO8DA1orKluNa4jkyXBywHKs/Q+20LVc+RD\ngKXqFGJUdo8mAxEScs0CAwEAATANBgkqhkiG9w0BAQsFAAOCAgEAkMxsU4VLPd4J\n0rElBNBIyqPtvnlTs6VkhIK0l4oM58wtDKc1uG9UPSX5j29NguZM6LOe0jCsU2Vg\nEpUseMWQjx4o2yBg7MokQyjWc1zu6PppKhQ+RqHQy/biJ2zsIMpX3oMASXffvnW5\nn4Bjyo1JdDJiLm1fLvLlVVxQoraJD+rtpqWDEYixGVREUo5OIL5Y5dVjkHG2r9RQ\nQuu3yEiyr9gAW8yhz3YR6/sJ6boyGK8NC0v8Jih7NnCdT+9ML+3jn3P5F3TeXdSf\nVeYIm5oWAOTe3AjjKP8ARMb2RYACjg80/AcowD/dvRRjbwQmyucUNug2pXJynXpD\nNfx1IBmUmzSAT1Z5yNuY/f3VRBJvmIQ6Jpmef+g0/wUJpyS4SObguItyYlFPLqRH\nK1oKqNX/uV0GWWEQl6Lml986TzlHxc4ljtHBhjzlKYIYYZLWWipk4JiB8hxJcTK+\ncrgvclEQSxFlmAyoqxYFClrOOsPqZJdBhDTvoUWnnWuJLQt7DLHpyInp+S75Gg3o\n0zgHpt9m26B3YbjQGYMQlYmhl2VLQa+Ey0W8UZQXLcTvoRT4p+8crqr6cNNsxCyZ\nm08vBbEMIMvhBeLQvpM75oaMBmelegipFl2eelxVIHdGJWoyJSZQUdXN0uSidhZp\nI7AIgzhqK1Ku/IXK0OSXJonn+/9X/VI=\n-----END CERTIFICATE-----",
      "create_time": "2022-04-08T18:27:33+08:00",
      "expire_at": "1653384119461",
      "model": {
        "file_url": "model/auto3d-G8sbTjQ-b8UT4u16XKWCSt.at3d",
        "material_base_url": "materials/",
        "material_textures": [
          "texture_0.jpg",
          "texture_1.jpg",
          "texture_2.jpg",
          "texture_3.jpg"
        ],
        "modify_time": "2022-04-29T18:39:57+08:00",
        "type": 0
      },
      "observers": [
        {
          "accessible_nodes": [
            1,
            2,
            3,
            4,
            67,
            93,
            94,
            95,
            96,
            97,
            98,
            167,
            168,
            169,
            170,
            171,
            172,
            173
          ],
          "floor_index": 0,
          "index": 0,
          "offset_point_count": 0,
          "position": [
            -4.16880989074707,
            -0.015086299739778042,
            22.787799835205078
          ],
          "quaternion": {
            "w": 0.004416296981567055,
            "x": -0.006961607262008803,
            "y": -0.9999058351289047,
            "z": -0.010970437160975089
          },
          "standing_position": [
            -4.16880989074707,
            -1.3470895801092677,
            22.787799835205078
          ],
          "visible_nodes": [
            1,
            2,
            3,
            4,
            67,
            93,
            94,
            95,
            96,
            97,
            98,
            167,
            168,
            169,
            170,
            171,
            172,
            173
          ]
        },
        {
          "accessible_nodes": [
            0,
            2,
            3,
            4,
            5,
            67,
            94,
            95,
            167,
            168,
            169,
            170,
            171
          ],
          "floor_index": 0,
          "index": 1,
          "offset_point_count": 0,
          "position": [
            -10.825300216674805,
            -0.06255710124969482,
            22.76959991455078
          ],
          "quaternion": {
            "w": 0.007221820907118616,
            "x": -0.012694710985561583,
            "y": -0.9997922264257064,
            "z": -0.014219152018643127
          },
          "standing_position": [
            -10.825300216674805,
            -1.2657720859378523,
            22.76959991455078
          ],
          "visible_nodes": [
            0,
            2,
            3,
            4,
            5,
            67,
            94,
            95,
            167,
            168,
            169,
            170,
            171
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            3,
            4,
            5,
            6,
            95,
            167,
            169,
            170,
            171
          ],
          "floor_index": 0,
          "index": 2,
          "offset_point_count": 0,
          "position": [
            -16.6471004486084,
            -0.09005600214004517,
            22.83449935913086
          ],
          "quaternion": {
            "w": 0.053189366053803866,
            "x": -0.008350048706051716,
            "y": -0.9984796634541001,
            "z": -0.011812259825862046
          },
          "standing_position": [
            -16.6471004486084,
            -1.3155707441590576,
            22.83449935913086
          ],
          "visible_nodes": [
            0,
            1,
            3,
            4,
            5,
            6,
            95,
            167,
            169,
            170,
            171
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            4,
            5,
            6,
            7,
            167,
            169
          ],
          "floor_index": 0,
          "index": 3,
          "offset_point_count": 0,
          "position": [
            -23.042999267578125,
            0.006556409876793623,
            22.877099990844727
          ],
          "quaternion": {
            "w": 0.0051720323508649985,
            "x": -0.007855492373115015,
            "y": -0.9999029067706939,
            "z": -0.010282754440444677
          },
          "standing_position": [
            -23.042999267578125,
            -1.3207802156428914,
            22.877099990844727
          ],
          "visible_nodes": [
            0,
            1,
            2,
            4,
            5,
            6,
            7,
            167,
            169
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            167
          ],
          "floor_index": 0,
          "index": 4,
          "offset_point_count": 0,
          "position": [
            -29.490100860595703,
            0.013796799816191196,
            23.082300186157227
          ],
          "quaternion": {
            "w": -0.9979610592850516,
            "x": 0.008141975798098569,
            "y": 0.06304557754270092,
            "z": -0.005717786659503561
          },
          "standing_position": [
            -29.490100860595703,
            -1.266173699015901,
            23.082300186157227
          ],
          "visible_nodes": [
            0,
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            167
          ]
        },
        {
          "accessible_nodes": [
            1,
            2,
            3,
            4,
            6,
            7,
            8,
            9
          ],
          "floor_index": 0,
          "index": 5,
          "offset_point_count": 0,
          "position": [
            -35.47460174560547,
            0.020888900384306908,
            22.847299575805664
          ],
          "quaternion": {
            "w": -0.9995091321321906,
            "x": 0.006118078601825139,
            "y": 0.03030671609586217,
            "z": -0.005055661465999881
          },
          "standing_position": [
            -35.47460174560547,
            -1.2104277406858917,
            22.847299575805664
          ],
          "visible_nodes": [
            1,
            2,
            3,
            4,
            6,
            7,
            8,
            9
          ]
        },
        {
          "accessible_nodes": [
            2,
            3,
            4,
            5,
            7,
            8,
            9,
            10
          ],
          "floor_index": 0,
          "index": 6,
          "offset_point_count": 0,
          "position": [
            -40.890201568603516,
            0.012701299972832203,
            23.234500885009766
          ],
          "quaternion": {
            "w": 0.00829034693749317,
            "x": -0.027381256335049235,
            "y": -0.9995659541858284,
            "z": -0.007031424452992571
          },
          "standing_position": [
            -40.890201568603516,
            -1.2276423261915606,
            23.234500885009766
          ],
          "visible_nodes": [
            2,
            3,
            4,
            5,
            7,
            8,
            9,
            10
          ]
        },
        {
          "accessible_nodes": [
            3,
            4,
            5,
            6,
            8,
            9,
            10,
            11
          ],
          "floor_index": 0,
          "index": 7,
          "offset_point_count": 0,
          "position": [
            -47.68320083618164,
            0.03471770137548447,
            23.100400924682617
          ],
          "quaternion": {
            "w": 0.005302524918732411,
            "x": -0.009902245297658312,
            "y": -0.999887191846923,
            "z": -0.009971174203551314
          },
          "standing_position": [
            -47.68320083618164,
            -1.2358532216856684,
            23.100400924682617
          ],
          "visible_nodes": [
            3,
            4,
            5,
            6,
            8,
            9,
            10,
            11
          ]
        },
        {
          "accessible_nodes": [
            4,
            5,
            6,
            7,
            9,
            10,
            11,
            12
          ],
          "floor_index": 0,
          "index": 8,
          "offset_point_count": 0,
          "position": [
            -53.67359924316406,
            0.041630201041698456,
            23.079099655151367
          ],
          "quaternion": {
            "w": 0.06947796938693504,
            "x": -0.007388263634459509,
            "y": -0.9975139665820947,
            "z": -0.009171074611976408
          },
          "standing_position": [
            -53.67359924316406,
            -1.2156666005514385,
            23.079099655151367
          ],
          "visible_nodes": [
            4,
            5,
            6,
            7,
            9,
            10,
            11,
            12
          ]
        },
        {
          "accessible_nodes": [
            5,
            6,
            7,
            8,
            10,
            11,
            12,
            13
          ],
          "floor_index": 0,
          "index": 9,
          "offset_point_count": 0,
          "position": [
            -59.84960174560547,
            0.04858839884400368,
            23.25
          ],
          "quaternion": {
            "w": 0.06631704501457161,
            "x": -0.00726853542653991,
            "y": -0.9977490975617926,
            "z": -0.006779240365415714
          },
          "standing_position": [
            -59.84960174560547,
            -1.1613946525223746,
            23.25
          ],
          "visible_nodes": [
            5,
            6,
            7,
            8,
            10,
            11,
            12,
            13
          ]
        },
        {
          "accessible_nodes": [
            6,
            7,
            8,
            9,
            11,
            12,
            13,
            14
          ],
          "floor_index": 0,
          "index": 10,
          "offset_point_count": 0,
          "position": [
            -65.69660186767578,
            0.055368900299072266,
            23.190900802612305
          ],
          "quaternion": {
            "w": 0.043734759777793925,
            "x": -0.00993165145116803,
            "y": -0.9989677406215481,
            "z": -0.007217649975204071
          },
          "standing_position": [
            -65.69660186767578,
            -1.1128094399882027,
            23.190900802612305
          ],
          "visible_nodes": [
            6,
            7,
            8,
            9,
            11,
            12,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            7,
            8,
            9,
            10,
            12,
            13,
            14
          ],
          "floor_index": 0,
          "index": 11,
          "offset_point_count": 0,
          "position": [
            -71.62339782714844,
            0.485289990901947,
            23.050199508666992
          ],
          "quaternion": {
            "w": 0.027091034854817588,
            "x": -0.0181299925087612,
            "y": -0.999411760110982,
            "z": 0.010654485842774982
          },
          "standing_position": [
            -71.62339782714844,
            -0.827542919913941,
            23.050199508666992
          ],
          "visible_nodes": [
            7,
            8,
            9,
            10,
            12,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            8,
            9,
            10,
            11,
            13,
            14
          ],
          "floor_index": 0,
          "index": 12,
          "offset_point_count": 0,
          "position": [
            -79.0811996459961,
            0.07083170115947723,
            23.122499465942383
          ],
          "quaternion": {
            "w": 0.04216633997808736,
            "x": -0.007692985723756613,
            "y": -0.9990013023154138,
            "z": -0.012618100212337623
          },
          "standing_position": [
            -79.0811996459961,
            -1.1217188025132117,
            23.122499465942383
          ],
          "visible_nodes": [
            8,
            9,
            10,
            11,
            13,
            14
          ]
        },
        {
          "accessible_nodes": [
            9,
            10,
            11,
            12,
            14
          ],
          "floor_index": 0,
          "index": 13,
          "offset_point_count": 0,
          "position": [
            -86.25499725341797,
            0.07912939786911011,
            23.07430076599121
          ],
          "quaternion": {
            "w": 0.08134203758001911,
            "x": -0.007207052092330343,
            "y": -0.9966001532335372,
            "z": -0.010938862757124784
          },
          "standing_position": [
            -86.25499725341797,
            -1.2602875374359597,
            23.07430076599121
          ],
          "visible_nodes": [
            9,
            10,
            11,
            12,
            14
          ]
        },
        {
          "accessible_nodes": [
            10,
            11,
            12,
            13,
            15,
            16,
            17,
            23,
            24
          ],
          "floor_index": 0,
          "index": 14,
          "offset_point_count": 0,
          "position": [
            -94.24490356445312,
            0.08909709751605988,
            22.188499450683594
          ],
          "quaternion": {
            "w": 0.07865390261994795,
            "x": -0.005703152464953597,
            "y": -0.996800661753298,
            "z": -0.013018358021356634
          },
          "standing_position": [
            -94.24490356445312,
            -1.159116920958544,
            22.188499450683594
          ],
          "visible_nodes": [
            10,
            11,
            12,
            13,
            15,
            16,
            17,
            23,
            24
          ]
        },
        {
          "accessible_nodes": [
            14,
            16,
            17,
            18,
            23,
            24
          ],
          "floor_index": 0,
          "index": 15,
          "offset_point_count": 0,
          "position": [
            -96.15519714355469,
            0.09530100226402283,
            17.597999572753906
          ],
          "quaternion": {
            "w": 0.02629949517516602,
            "x": -0.008257319867533816,
            "y": -0.9995678325456689,
            "z": -0.01021306378024513
          },
          "standing_position": [
            -96.15519714355469,
            -1.181912709799472,
            17.597999572753906
          ],
          "visible_nodes": [
            14,
            16,
            17,
            18,
            23,
            24
          ]
        },
        {
          "accessible_nodes": [
            14,
            15,
            17,
            18,
            23,
            24
          ],
          "floor_index": 0,
          "index": 16,
          "offset_point_count": 0,
          "position": [
            -96.7323989868164,
            0.09969209879636765,
            13.326800346374512
          ],
          "quaternion": {
            "w": -0.007897202629515043,
            "x": -0.01153876826652089,
            "y": -0.9998315058258185,
            "z": -0.0118935744058947
          },
          "standing_position": [
            -96.7323989868164,
            -1.1848547271346683,
            13.326800346374512
          ],
          "visible_nodes": [
            14,
            15,
            17,
            18,
            23,
            24
          ]
        },
        {
          "accessible_nodes": [
            14,
            15,
            16,
            18,
            19,
            23,
            24
          ],
          "floor_index": 0,
          "index": 17,
          "offset_point_count": 0,
          "position": [
            -96.22460174560547,
            0.1047080010175705,
            6.908549785614014
          ],
          "quaternion": {
            "w": 0.005648275638441049,
            "x": -0.00784265017306611,
            "y": -0.9999196944178332,
            "z": -0.00819730603405895
          },
          "standing_position": [
            -96.22460174560547,
            -1.1907763081256286,
            6.908549785614014
          ],
          "visible_nodes": [
            14,
            15,
            16,
            18,
            19,
            23,
            24
          ]
        },
        {
          "accessible_nodes": [
            15,
            16,
            17,
            19,
            20,
            21,
            22,
            23,
            24
          ],
          "floor_index": 0,
          "index": 18,
          "offset_point_count": 0,
          "position": [
            -95.37560272216797,
            0.11982499808073044,
            -11.536399841308594
          ],
          "quaternion": {
            "w": 0.021121294622946762,
            "x": -0.004342716182808616,
            "y": -0.9997227627186362,
            "z": -0.009456262413551547
          },
          "standing_position": [
            -95.37560272216797,
            -1.2226741522378495,
            -11.536399841308594
          ],
          "visible_nodes": [
            15,
            16,
            17,
            19,
            20,
            21,
            22,
            23,
            24
          ]
        },
        {
          "accessible_nodes": [
            17,
            18,
            20,
            21,
            22,
            23,
            24,
            25
          ],
          "floor_index": 0,
          "index": 19,
          "offset_point_count": 0,
          "position": [
            -95.4926986694336,
            0.12631799280643463,
            -18.822799682617188
          ],
          "quaternion": {
            "w": 0.019975076213284697,
            "x": -0.007742164721957211,
            "y": -0.9997073505263598,
            "z": -0.01123608855146579
          },
          "standing_position": [
            -95.4926986694336,
            -1.1653941157516274,
            -18.822799682617188
          ],
          "visible_nodes": [
            17,
            18,
            20,
            21,
            22,
            23,
            24,
            25
          ]
        },
        {
          "accessible_nodes": [
            18,
            19,
            21,
            22,
            23,
            24,
            25,
            27
          ],
          "floor_index": 0,
          "index": 20,
          "offset_point_count": 0,
          "position": [
            -95.7405014038086,
            0.1325940042734146,
            -25.688800811767578
          ],
          "quaternion": {
            "w": -0.030758788881434934,
            "x": -0.006304613977427299,
            "y": -0.9994943204482718,
            "z": -0.005023678721151598
          },
          "standing_position": [
            -95.7405014038086,
            -1.1487594376210215,
            -25.688800811767578
          ],
          "visible_nodes": [
            18,
            19,
            21,
            22,
            23,
            24,
            25,
            27
          ]
        },
        {
          "accessible_nodes": [
            18,
            19,
            20,
            22,
            23,
            25,
            26,
            27
          ],
          "floor_index": 0,
          "index": 21,
          "offset_point_count": 0,
          "position": [
            -95.78730010986328,
            0.13879400491714478,
            -32.731998443603516
          ],
          "quaternion": {
            "w": -0.022433358459053098,
            "x": -0.00781752545976337,
            "y": -0.9996704437694465,
            "z": -0.009728084191133126
          },
          "standing_position": [
            -95.78730010986328,
            -1.1661314626055794,
            -32.731998443603516
          ],
          "visible_nodes": [
            18,
            19,
            20,
            22,
            23,
            25,
            26,
            27
          ]
        },
        {
          "accessible_nodes": [
            18,
            19,
            20,
            21,
            25,
            26,
            27,
            28
          ],
          "floor_index": 0,
          "index": 22,
          "offset_point_count": 0,
          "position": [
            -95.83599853515625,
            0.14492399990558624,
            -39.69300079345703
          ],
          "quaternion": {
            "w": 0.0025700499334730185,
            "x": -0.0034130139009436616,
            "y": -0.9999326966405969,
            "z": -0.010786901256874967
          },
          "standing_position": [
            -95.83599853515625,
            -1.0939742672892512,
            -39.69300079345703
          ],
          "visible_nodes": [
            18,
            19,
            20,
            21,
            25,
            26,
            27,
            28
          ]
        },
        {
          "accessible_nodes": [
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            24
          ],
          "floor_index": 0,
          "index": 23,
          "offset_point_count": 0,
          "position": [
            -96.00270080566406,
            0.11535699665546417,
            -5.5886101722717285
          ],
          "quaternion": {
            "w": -0.012522150014658468,
            "x": -0.00352328671525732,
            "y": -0.9998586003350796,
            "z": -0.010656584011714248
          },
          "standing_position": [
            -96.00270080566406,
            -1.1962930205623137,
            -5.5886101722717285
          ],
          "visible_nodes": [
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            24
          ]
        },
        {
          "accessible_nodes": [
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            23
          ],
          "floor_index": 0,
          "index": 24,
          "offset_point_count": 0,
          "position": [
            -96.09420013427734,
            0.11172699928283691,
            -1.3077000379562378
          ],
          "quaternion": {
            "w": 0.011577117042060053,
            "x": -0.006526869579944045,
            "y": -0.9997941192646683,
            "z": -0.01533240957625325
          },
          "standing_position": [
            -96.09420013427734,
            -1.204865321221303,
            -1.3077000379562378
          ],
          "visible_nodes": [
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            23
          ]
        },
        {
          "accessible_nodes": [
            19,
            20,
            21,
            22,
            26,
            27,
            28,
            29,
            69
          ],
          "floor_index": 0,
          "index": 25,
          "offset_point_count": 0,
          "position": [
            -95.63269805908203,
            0.15035399794578552,
            -46.185001373291016
          ],
          "quaternion": {
            "w": 0.01019627004702953,
            "x": -0.003283378903291959,
            "y": -0.9999076010812376,
            "z": -0.008369495961179339
          },
          "standing_position": [
            -95.63269805908203,
            -1.083742693743098,
            -46.185001373291016
          ],
          "visible_nodes": [
            19,
            20,
            21,
            22,
            26,
            27,
            28,
            29,
            69
          ]
        },
        {
          "accessible_nodes": [
            21,
            22,
            25,
            27,
            28,
            29,
            30,
            31,
            32,
            69
          ],
          "floor_index": 0,
          "index": 26,
          "offset_point_count": 0,
          "position": [
            -95.87249755859375,
            0.16288800537586212,
            -60.23360061645508
          ],
          "quaternion": {
            "w": 0.018887593836846888,
            "x": -0.008213880387956158,
            "y": -0.9997343515171615,
            "z": -0.010345350379009863
          },
          "standing_position": [
            -95.87249755859375,
            -1.0860800229329484,
            -60.23360061645508
          ],
          "visible_nodes": [
            21,
            22,
            25,
            27,
            28,
            29,
            30,
            31,
            32,
            69
          ]
        },
        {
          "accessible_nodes": [
            20,
            21,
            22,
            25,
            26,
            28,
            29,
            30,
            31,
            69
          ],
          "floor_index": 0,
          "index": 27,
          "offset_point_count": 0,
          "position": [
            -95.77290344238281,
            0.15693999826908112,
            -53.54800033569336
          ],
          "quaternion": {
            "w": -0.06425717114413142,
            "x": -0.005542247720395593,
            "y": -0.9978573688271697,
            "z": -0.010998338588926602
          },
          "standing_position": [
            -95.77290344238281,
            -1.0801937895980267,
            -53.54800033569336
          ],
          "visible_nodes": [
            20,
            21,
            22,
            25,
            26,
            28,
            29,
            30,
            31,
            69
          ]
        },
        {
          "accessible_nodes": [
            22,
            25,
            26,
            27,
            29,
            30,
            31,
            32,
            69,
            159,
            160,
            161
          ],
          "floor_index": 0,
          "index": 28,
          "offset_point_count": 0,
          "position": [
            -96.06839752197266,
            0.16983500123023987,
            -67.9364013671875
          ],
          "quaternion": {
            "w": 0.06069132541266389,
            "x": -0.0108328028836727,
            "y": -0.9980214707338331,
            "z": -0.012343172170782834
          },
          "standing_position": [
            -96.06839752197266,
            -1.155419346220528,
            -67.9364013671875
          ],
          "visible_nodes": [
            22,
            25,
            26,
            27,
            29,
            30,
            31,
            32,
            69,
            159,
            160,
            161
          ]
        },
        {
          "accessible_nodes": [
            25,
            26,
            27,
            28,
            30,
            31,
            32,
            69
          ],
          "floor_index": 0,
          "index": 29,
          "offset_point_count": 0,
          "position": [
            -95.904296875,
            0.17422400414943695,
            -73.18229675292969
          ],
          "quaternion": {
            "w": 0.0209419451235343,
            "x": -0.011919195735293818,
            "y": -0.9996728063793175,
            "z": -0.00858135410955526
          },
          "standing_position": [
            -95.904296875,
            -1.0931992753476756,
            -73.18229675292969
          ],
          "visible_nodes": [
            25,
            26,
            27,
            28,
            30,
            31,
            32,
            69
          ]
        },
        {
          "accessible_nodes": [
            26,
            27,
            28,
            29,
            31,
            32
          ],
          "floor_index": 0,
          "index": 30,
          "offset_point_count": 0,
          "position": [
            -96.13729858398438,
            0.17948299646377563,
            -78.90249633789062
          ],
          "quaternion": {
            "w": 0.015446905058692223,
            "x": -0.003986164447067022,
            "y": -0.9998102306071464,
            "z": -0.011181046522517831
          },
          "standing_position": [
            -96.13729858398438,
            -1.1048932009615982,
            -78.90249633789062
          ],
          "visible_nodes": [
            26,
            27,
            28,
            29,
            31,
            32
          ]
        },
        {
          "accessible_nodes": [
            26,
            27,
            28,
            29,
            30,
            32,
            33
          ],
          "floor_index": 0,
          "index": 31,
          "offset_point_count": 0,
          "position": [
            -96.24099731445312,
            0.18358899652957916,
            -83.47149658203125
          ],
          "quaternion": {
            "w": 0.05367988749622297,
            "x": -0.013466122163379082,
            "y": -0.9984058473611238,
            "z": -0.011086051899697986
          },
          "standing_position": [
            -96.24099731445312,
            -1.1197661346493193,
            -83.47149658203125
          ],
          "visible_nodes": [
            26,
            27,
            28,
            29,
            30,
            32,
            33
          ]
        },
        {
          "accessible_nodes": [
            26,
            28,
            29,
            30,
            31,
            33,
            34,
            35,
            36,
            37
          ],
          "floor_index": 0,
          "index": 32,
          "offset_point_count": 0,
          "position": [
            -95.9623031616211,
            0.18655000627040863,
            -87.2322998046875
          ],
          "quaternion": {
            "w": -0.017385695213109762,
            "x": -0.013797181865002464,
            "y": -0.999678478110822,
            "z": -0.012260519636405223
          },
          "standing_position": [
            -95.9623031616211,
            -1.124312333017313,
            -87.2322998046875
          ],
          "visible_nodes": [
            26,
            28,
            29,
            30,
            31,
            33,
            34,
            35,
            36,
            37
          ]
        },
        {
          "accessible_nodes": [
            31,
            32,
            34,
            35,
            36,
            37,
            38
          ],
          "floor_index": 0,
          "index": 33,
          "offset_point_count": 0,
          "position": [
            -89.7571029663086,
            0.18125000596046448,
            -89.34259796142578
          ],
          "quaternion": {
            "w": -0.0006218300940469566,
            "x": -0.005313374868684574,
            "y": -0.9999388586664903,
            "z": -0.00967753802467006
          },
          "standing_position": [
            -89.7571029663086,
            -1.082830645032847,
            -89.34259796142578
          ],
          "visible_nodes": [
            31,
            32,
            34,
            35,
            36,
            37,
            38
          ]
        },
        {
          "accessible_nodes": [
            32,
            33,
            35,
            36,
            37,
            38
          ],
          "floor_index": 0,
          "index": 34,
          "offset_point_count": 0,
          "position": [
            -85.79769897460938,
            0.17643100023269653,
            -89.04139709472656
          ],
          "quaternion": {
            "w": -0.025994654789021507,
            "x": -0.007960726599559155,
            "y": -0.9994699667897642,
            "z": -0.01790761813764435
          },
          "standing_position": [
            -85.79769897460938,
            -1.1196618911519531,
            -89.04139709472656
          ],
          "visible_nodes": [
            32,
            33,
            35,
            36,
            37,
            38
          ]
        },
        {
          "accessible_nodes": [
            32,
            33,
            34,
            36,
            37,
            38,
            39
          ],
          "floor_index": 0,
          "index": 35,
          "offset_point_count": 0,
          "position": [
            -81.76190185546875,
            0.17194099724292755,
            -89.21880340576172
          ],
          "quaternion": {
            "w": -0.03578787832521663,
            "x": 0.002246427227552982,
            "y": -0.9993499938097964,
            "z": 0.0037111120803579303
          },
          "standing_position": [
            -81.76190185546875,
            -1.1814589325482783,
            -89.21880340576172
          ],
          "visible_nodes": [
            32,
            33,
            34,
            36,
            37,
            38,
            39
          ]
        },
        {
          "accessible_nodes": [
            32,
            33,
            34,
            35,
            37,
            38,
            39,
            40
          ],
          "floor_index": 0,
          "index": 36,
          "offset_point_count": 0,
          "position": [
            -74.752197265625,
            0.16384899616241455,
            -89.19000244140625
          ],
          "quaternion": {
            "w": -0.03872422795636977,
            "x": -0.00844886101305497,
            "y": -0.9991766401041824,
            "z": -0.008666563686522884
          },
          "standing_position": [
            -74.752197265625,
            -1.1928767087643726,
            -89.19000244140625
          ],
          "visible_nodes": [
            32,
            33,
            34,
            35,
            37,
            38,
            39,
            40
          ]
        },
        {
          "accessible_nodes": [
            32,
            33,
            34,
            35,
            36,
            38,
            39,
            40,
            41,
            42
          ],
          "floor_index": 0,
          "index": 37,
          "offset_point_count": 0,
          "position": [
            -68.8323974609375,
            0.15716899931430817,
            -89.34130096435547
          ],
          "quaternion": {
            "w": 0.01136219323001058,
            "x": -0.0076563182071621196,
            "y": -0.9998740921626814,
            "z": -0.008005758112800106
          },
          "standing_position": [
            -68.8323974609375,
            -1.1731455691480606,
            -89.34130096435547
          ],
          "visible_nodes": [
            32,
            33,
            34,
            35,
            36,
            38,
            39,
            40,
            41,
            42
          ]
        },
        {
          "accessible_nodes": [
            33,
            34,
            35,
            36,
            37,
            39,
            40,
            41,
            42,
            43
          ],
          "floor_index": 0,
          "index": 38,
          "offset_point_count": 0,
          "position": [
            -62.1416015625,
            0.1495780050754547,
            -89.46600341796875
          ],
          "quaternion": {
            "w": -0.0335992102182118,
            "x": -0.014366596538657888,
            "y": -0.9993107700403309,
            "z": -0.006533198222735014
          },
          "standing_position": [
            -62.1416015625,
            -1.1349041386653576,
            -89.46600341796875
          ],
          "visible_nodes": [
            33,
            34,
            35,
            36,
            37,
            39,
            40,
            41,
            42,
            43
          ]
        },
        {
          "accessible_nodes": [
            35,
            36,
            37,
            38,
            40,
            41,
            42,
            43,
            44
          ],
          "floor_index": 0,
          "index": 39,
          "offset_point_count": 0,
          "position": [
            -55.4208984375,
            0.1416510045528412,
            -89.24500274658203
          ],
          "quaternion": {
            "w": 0.06527591005331763,
            "x": -0.0177328666686816,
            "y": -0.997680126373471,
            "z": 0.007679213071250054
          },
          "standing_position": [
            -55.4208984375,
            -1.1201359848861419,
            -89.24500274658203
          ],
          "visible_nodes": [
            35,
            36,
            37,
            38,
            40,
            41,
            42,
            43,
            44
          ]
        },
        {
          "accessible_nodes": [
            36,
            37,
            38,
            39,
            41,
            42,
            43,
            44,
            45,
            46
          ],
          "floor_index": 0,
          "index": 40,
          "offset_point_count": 0,
          "position": [
            -49.7307014465332,
            0.13503499329090118,
            -89.16840362548828
          ],
          "quaternion": {
            "w": 0.08034742023638197,
            "x": -0.011062432287684075,
            "y": -0.9966932923384325,
            "z": -0.004938906838405409
          },
          "standing_position": [
            -49.7307014465332,
            -1.157276373423004,
            -89.16840362548828
          ],
          "visible_nodes": [
            36,
            37,
            38,
            39,
            41,
            42,
            43,
            44,
            45,
            46
          ]
        },
        {
          "accessible_nodes": [
            37,
            38,
            39,
            40,
            42,
            43,
            44,
            45,
            46,
            47,
            48
          ],
          "floor_index": 0,
          "index": 41,
          "offset_point_count": 0,
          "position": [
            -43.904598236083984,
            0.12845000624656677,
            -89.30470275878906
          ],
          "quaternion": {
            "w": -0.028656255089588266,
            "x": -0.015184403439688693,
            "y": -0.9994466711065686,
            "z": -0.0073894605205684655
          },
          "standing_position": [
            -43.904598236083984,
            -1.1488005614630796,
            -89.30470275878906
          ],
          "visible_nodes": [
            37,
            38,
            39,
            40,
            42,
            43,
            44,
            45,
            46,
            47,
            48
          ]
        },
        {
          "accessible_nodes": [
            37,
            38,
            39,
            40,
            41,
            43,
            44,
            45,
            46,
            47,
            48,
            49
          ],
          "floor_index": 0,
          "index": 42,
          "offset_point_count": 0,
          "position": [
            -39.8568000793457,
            0.1238349974155426,
            -89.35440063476562
          ],
          "quaternion": {
            "w": 0.022629044682209012,
            "x": -0.012302832970653562,
            "y": -0.9996504321653629,
            "z": -0.005964590499946772
          },
          "standing_position": [
            -39.8568000793457,
            -1.1344122718857523,
            -89.35440063476562
          ],
          "visible_nodes": [
            37,
            38,
            39,
            40,
            41,
            43,
            44,
            45,
            46,
            47,
            48,
            49
          ]
        },
        {
          "accessible_nodes": [
            38,
            39,
            40,
            41,
            42,
            44,
            45,
            46,
            47,
            48,
            49,
            50
          ],
          "floor_index": 0,
          "index": 43,
          "offset_point_count": 0,
          "position": [
            -36.059898376464844,
            0.1186399981379509,
            -88.40889739990234
          ],
          "quaternion": {
            "w": -0.02192773013938749,
            "x": -0.013835377030983764,
            "y": -0.9996584815738252,
            "z": 0.003264984258706719
          },
          "standing_position": [
            -36.059898376464844,
            -1.1455421335735645,
            -88.40889739990234
          ],
          "visible_nodes": [
            38,
            39,
            40,
            41,
            42,
            44,
            45,
            46,
            47,
            48,
            49,
            50
          ]
        },
        {
          "accessible_nodes": [
            39,
            40,
            41,
            42,
            43,
            45,
            46,
            47,
            48,
            49,
            50
          ],
          "floor_index": 0,
          "index": 44,
          "offset_point_count": 0,
          "position": [
            -29.78030014038086,
            0.1116190031170845,
            -88.64399719238281
          ],
          "quaternion": {
            "w": 0.03854486277194393,
            "x": -0.01566761768684771,
            "y": -0.9991096466843453,
            "z": -0.006980739211340644
          },
          "standing_position": [
            -29.78030014038086,
            -1.190764058089021,
            -88.64399719238281
          ],
          "visible_nodes": [
            39,
            40,
            41,
            42,
            43,
            45,
            46,
            47,
            48,
            49,
            50
          ]
        },
        {
          "accessible_nodes": [
            40,
            41,
            42,
            43,
            44,
            46,
            47,
            48,
            49,
            50,
            51,
            128
          ],
          "floor_index": 0,
          "index": 45,
          "offset_point_count": 0,
          "position": [
            -25.120500564575195,
            0.10661400109529495,
            -89.05390167236328
          ],
          "quaternion": {
            "w": 0.013182409788456017,
            "x": -0.02054967773088115,
            "y": -0.9996926610252378,
            "z": 0.004303849331987015
          },
          "standing_position": [
            -25.120500564575195,
            -1.1382950433310113,
            -89.05390167236328
          ],
          "visible_nodes": [
            40,
            41,
            42,
            43,
            44,
            46,
            47,
            48,
            49,
            50,
            51,
            128
          ]
        },
        {
          "accessible_nodes": [
            40,
            41,
            42,
            43,
            44,
            45,
            47,
            48,
            49,
            50,
            51,
            52,
            126,
            127,
            128,
            140
          ],
          "floor_index": 0,
          "index": 46,
          "offset_point_count": 0,
          "position": [
            -19.7367000579834,
            0.10034999996423721,
            -88.97579956054688
          ],
          "quaternion": {
            "w": 0.03427409163872392,
            "x": -0.007425711336196323,
            "y": -0.999379762885104,
            "z": 0.003198598101614888
          },
          "standing_position": [
            -19.7367000579834,
            -1.1592166295776751,
            -88.97579956054688
          ],
          "visible_nodes": [
            40,
            41,
            42,
            43,
            44,
            45,
            47,
            48,
            49,
            50,
            51,
            52,
            126,
            127,
            128,
            140
          ]
        },
        {
          "accessible_nodes": [
            41,
            42,
            43,
            44,
            45,
            46,
            48,
            49,
            50,
            51,
            52,
            126,
            127,
            128,
            140,
            152
          ],
          "floor_index": 0,
          "index": 47,
          "offset_point_count": 0,
          "position": [
            -17.28260040283203,
            0.09689159691333771,
            -88.24909973144531
          ],
          "quaternion": {
            "w": 0.0708892808194172,
            "x": -0.008371251536592014,
            "y": -0.9974434852007,
            "z": 0.0033348780014085437
          },
          "standing_position": [
            -17.28260040283203,
            -1.1181992338748759,
            -88.24909973144531
          ],
          "visible_nodes": [
            41,
            42,
            43,
            44,
            45,
            46,
            48,
            49,
            50,
            51,
            52,
            126,
            127,
            128,
            140,
            152
          ]
        },
        {
          "accessible_nodes": [
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            49,
            50,
            51,
            52,
            127,
            128,
            152
          ],
          "floor_index": 0,
          "index": 48,
          "offset_point_count": 0,
          "position": [
            -14.57390022277832,
            0.09401410073041916,
            -88.52369689941406
          ],
          "quaternion": {
            "w": 0.04090779385605145,
            "x": -0.024822366504324702,
            "y": -0.9988128425225661,
            "z": -0.009127813605405969
          },
          "standing_position": [
            -14.57390022277832,
            -1.1563373314353185,
            -88.52369689941406
          ],
          "visible_nodes": [
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            49,
            50,
            51,
            52,
            127,
            128,
            152
          ]
        },
        {
          "accessible_nodes": [
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            50,
            51,
            52,
            53
          ],
          "floor_index": 0,
          "index": 49,
          "offset_point_count": 0,
          "position": [
            -10.1003999710083,
            0.08915480226278305,
            -88.85479736328125
          ],
          "quaternion": {
            "w": 0.011518752250617994,
            "x": -0.020347838599890276,
            "y": -0.9997182240464638,
            "z": -0.004093497415614078
          },
          "standing_position": [
            -10.1003999710083,
            -1.1413260311454354,
            -88.85479736328125
          ],
          "visible_nodes": [
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            50,
            51,
            52,
            53
          ]
        },
        {
          "accessible_nodes": [
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            51,
            52,
            53
          ],
          "floor_index": 0,
          "index": 50,
          "offset_point_count": 0,
          "position": [
            -6.473169803619385,
            0.08480410277843475,
            -88.65249633789062
          ],
          "quaternion": {
            "w": -0.5811633391065443,
            "x": -0.016764396342622986,
            "y": -0.8136110595303566,
            "z": 0.00227286779992115
          },
          "standing_position": [
            -6.473169803619385,
            -1.179071764712492,
            -88.65249633789062
          ],
          "visible_nodes": [
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            51,
            52,
            53
          ]
        },
        {
          "accessible_nodes": [
            45,
            46,
            47,
            48,
            49,
            50,
            52,
            53,
            68
          ],
          "floor_index": 0,
          "index": 51,
          "offset_point_count": 0,
          "position": [
            1.788390040397644,
            0.07532849907875061,
            -88.68900299072266
          ],
          "quaternion": {
            "w": -0.14178318508793508,
            "x": -0.011526243140182555,
            "y": -0.9898288054267677,
            "z": 0.00190263155337287
          },
          "standing_position": [
            1.788390040397644,
            -1.2024641246377217,
            -88.68900299072266
          ],
          "visible_nodes": [
            45,
            46,
            47,
            48,
            49,
            50,
            52,
            53,
            68
          ]
        },
        {
          "accessible_nodes": [
            46,
            47,
            48,
            49,
            50,
            51,
            53,
            54,
            68
          ],
          "floor_index": 0,
          "index": 52,
          "offset_point_count": 0,
          "position": [
            8.955610275268555,
            0.0669374018907547,
            -88.52519989013672
          ],
          "quaternion": {
            "w": -0.043909253759932404,
            "x": -0.002519606629379492,
            "y": -0.9989950151772562,
            "z": -0.008636353947007923
          },
          "standing_position": [
            8.955610275268555,
            -1.2501617813916939,
            -88.52519989013672
          ],
          "visible_nodes": [
            46,
            47,
            48,
            49,
            50,
            51,
            53,
            54,
            68
          ]
        },
        {
          "accessible_nodes": [
            49,
            50,
            51,
            52,
            54,
            55,
            56,
            68
          ],
          "floor_index": 0,
          "index": 53,
          "offset_point_count": 0,
          "position": [
            17.977699279785156,
            0.05700330063700676,
            -89.03939819335938
          ],
          "quaternion": {
            "w": -0.02573896606312849,
            "x": -0.007278186068368169,
            "y": -0.9996064201332175,
            "z": 0.00845879475905499
          },
          "standing_position": [
            17.977699279785156,
            -1.2047574171292856,
            -89.03939819335938
          ],
          "visible_nodes": [
            49,
            50,
            51,
            52,
            54,
            55,
            56,
            68
          ]
        },
        {
          "accessible_nodes": [
            52,
            53,
            55,
            56,
            57,
            58,
            68,
            133,
            134,
            135,
            141
          ],
          "floor_index": 0,
          "index": 54,
          "offset_point_count": 0,
          "position": [
            35.07059860229492,
            0.03830369934439659,
            -90.1521987915039
          ],
          "quaternion": {
            "w": -0.023949056672745474,
            "x": -0.001151502208867217,
            "y": -0.9995054348224889,
            "z": 0.020346865900194955
          },
          "standing_position": [
            35.07059860229492,
            -1.2539951229652058,
            -90.1521987915039
          ],
          "visible_nodes": [
            52,
            53,
            55,
            56,
            57,
            58,
            68,
            133,
            134,
            135,
            141
          ]
        },
        {
          "accessible_nodes": [
            53,
            54,
            56,
            57,
            58,
            59,
            68,
            135
          ],
          "floor_index": 0,
          "index": 55,
          "offset_point_count": 0,
          "position": [
            39.718299865722656,
            0.03263239935040474,
            -89.78240203857422
          ],
          "quaternion": {
            "w": -0.0018374563465708147,
            "x": -0.009077884128993378,
            "y": -0.9999550272842445,
            "z": 0.0020387324723671247
          },
          "standing_position": [
            39.718299865722656,
            -1.1430500708044324,
            -89.78240203857422
          ],
          "visible_nodes": [
            53,
            54,
            56,
            57,
            58,
            59,
            68,
            135
          ]
        },
        {
          "accessible_nodes": [
            53,
            54,
            55,
            57,
            58,
            59,
            60,
            68
          ],
          "floor_index": 0,
          "index": 56,
          "offset_point_count": 0,
          "position": [
            46.31869888305664,
            0.02518090046942234,
            -89.94770050048828
          ],
          "quaternion": {
            "w": 0.04980668612361802,
            "x": -0.007842588824292179,
            "y": -0.9987236982828341,
            "z": 0.002960060160891781
          },
          "standing_position": [
            46.31869888305664,
            -1.1429176478957432,
            -89.94770050048828
          ],
          "visible_nodes": [
            53,
            54,
            55,
            57,
            58,
            59,
            60,
            68
          ]
        },
        {
          "accessible_nodes": [
            54,
            55,
            56,
            58,
            59,
            60,
            61,
            68
          ],
          "floor_index": 0,
          "index": 57,
          "offset_point_count": 0,
          "position": [
            54.081298828125,
            0.016361599788069725,
            -90.07839965820312
          ],
          "quaternion": {
            "w": 0.16513296593340174,
            "x": -0.007686151450504052,
            "y": -0.9862256969484157,
            "z": 0.005557762986271565
          },
          "standing_position": [
            54.081298828125,
            -1.2531793443475188,
            -90.07839965820312
          ],
          "visible_nodes": [
            54,
            55,
            56,
            58,
            59,
            60,
            61,
            68
          ]
        },
        {
          "accessible_nodes": [
            54,
            55,
            56,
            57,
            59,
            60,
            61
          ],
          "floor_index": 0,
          "index": 58,
          "offset_point_count": 0,
          "position": [
            61.94110107421875,
            0.007351640146225691,
            -90.11869812011719
          ],
          "quaternion": {
            "w": 0.22108348801054045,
            "x": -0.010397941493351246,
            "y": -0.9751233979534618,
            "z": 0.012179003992034212
          },
          "standing_position": [
            61.94110107421875,
            -1.220220039739015,
            -90.11869812011719
          ],
          "visible_nodes": [
            54,
            55,
            56,
            57,
            59,
            60,
            61
          ]
        },
        {
          "accessible_nodes": [
            55,
            56,
            57,
            58,
            60,
            61
          ],
          "floor_index": 0,
          "index": 59,
          "offset_point_count": 0,
          "position": [
            68.6405029296875,
            0.00013519800268113613,
            -90.68399810791016
          ],
          "quaternion": {
            "w": -0.06234508133512096,
            "x": -0.007158464378409758,
            "y": -0.9979616640149055,
            "z": 0.011591679033719826
          },
          "standing_position": [
            68.6405029296875,
            -1.301352103599542,
            -90.68399810791016
          ],
          "visible_nodes": [
            55,
            56,
            57,
            58,
            60,
            61
          ]
        },
        {
          "accessible_nodes": [
            56,
            57,
            58,
            59,
            61
          ],
          "floor_index": 0,
          "index": 60,
          "offset_point_count": 0,
          "position": [
            76.1677017211914,
            -0.008644220419228077,
            -90.54989624023438
          ],
          "quaternion": {
            "w": -0.03660802540708046,
            "x": -0.0050937353118716494,
            "y": -0.9992887381469238,
            "z": 0.007477701695190816
          },
          "standing_position": [
            76.1677017211914,
            -1.2240405999276487,
            -90.54989624023438
          ],
          "visible_nodes": [
            56,
            57,
            58,
            59,
            61
          ]
        },
        {
          "accessible_nodes": [
            57,
            58,
            59,
            60,
            62,
            63
          ],
          "floor_index": 0,
          "index": 61,
          "offset_point_count": 0,
          "position": [
            83.23380279541016,
            -0.01818699948489666,
            -88.93280029296875
          ],
          "quaternion": {
            "w": -0.24282774451746023,
            "x": -0.00916635974991348,
            "y": -0.9700175038090607,
            "z": 0.004087571528368917
          },
          "standing_position": [
            83.23380279541016,
            -1.3256636482559723,
            -88.93280029296875
          ],
          "visible_nodes": [
            57,
            58,
            59,
            60,
            62,
            63
          ]
        },
        {
          "accessible_nodes": [
            61,
            63,
            64
          ],
          "floor_index": 0,
          "index": 62,
          "offset_point_count": 0,
          "position": [
            89.243896484375,
            -0.0296183992177248,
            -83.75849914550781
          ],
          "quaternion": {
            "w": -0.5035915215796973,
            "x": -0.01327722627024808,
            "y": -0.8638010660801302,
            "z": 0.008187149981092517
          },
          "standing_position": [
            89.243896484375,
            -1.2944929686850977,
            -83.75849914550781
          ],
          "visible_nodes": [
            61,
            63,
            64
          ]
        },
        {
          "accessible_nodes": [
            61,
            62,
            64,
            65,
            66,
            70,
            71
          ],
          "floor_index": 0,
          "index": 63,
          "offset_point_count": 0,
          "position": [
            92.93550109863281,
            -0.04037319868803024,
            -76.30169677734375
          ],
          "quaternion": {
            "w": -0.803904620759614,
            "x": -0.010297627560042998,
            "y": -0.5946683933518271,
            "z": 0.0009269094130607175
          },
          "standing_position": [
            92.93550109863281,
            -1.3270635813709661,
            -76.30169677734375
          ],
          "visible_nodes": [
            61,
            62,
            64,
            65,
            66,
            70,
            71
          ]
        },
        {
          "accessible_nodes": [
            62,
            63,
            65,
            66,
            70,
            71,
            72
          ],
          "floor_index": 0,
          "index": 64,
          "offset_point_count": 0,
          "position": [
            93.02149963378906,
            -0.04420369863510132,
            -72.02510070800781
          ],
          "quaternion": {
            "w": -0.700680325914247,
            "x": -0.009900799714615207,
            "y": -0.7133399125681882,
            "z": -0.009757827585140873
          },
          "standing_position": [
            93.02149963378906,
            -1.2730229552964585,
            -72.02510070800781
          ],
          "visible_nodes": [
            62,
            63,
            65,
            66,
            70,
            71,
            72
          ]
        },
        {
          "accessible_nodes": [
            63,
            64,
            66,
            70,
            71,
            72
          ],
          "floor_index": 0,
          "index": 65,
          "offset_point_count": 0,
          "position": [
            93.17389678955078,
            -0.05019170045852661,
            -65.36360168457031
          ],
          "quaternion": {
            "w": 0.03332394754928671,
            "x": -0.013715705229409465,
            "y": -0.9991568721434877,
            "z": 0.01967055050813067
          },
          "standing_position": [
            93.17389678955078,
            -1.3226231967060202,
            -65.36360168457031
          ],
          "visible_nodes": [
            63,
            64,
            66,
            70,
            71,
            72
          ]
        },
        {
          "accessible_nodes": [
            63,
            64,
            65,
            70,
            71,
            72
          ],
          "floor_index": 0,
          "index": 66,
          "offset_point_count": 0,
          "position": [
            93.08580017089844,
            -0.054649099707603455,
            -60.138999938964844
          ],
          "quaternion": {
            "w": -0.019303143635409695,
            "x": -0.01247209279188773,
            "y": -0.9995661778002802,
            "z": 0.01842017505107294
          },
          "standing_position": [
            93.08580017089844,
            -1.300429580675284,
            -60.138999938964844
          ],
          "visible_nodes": [
            63,
            64,
            65,
            70,
            71,
            72
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            94,
            95,
            96,
            97,
            98,
            99,
            167,
            168,
            169,
            170
          ],
          "floor_index": 0,
          "index": 67,
          "offset_point_count": 0,
          "position": [
            0.5200070142745972,
            -0.06445010006427765,
            17.536399841308594
          ],
          "quaternion": {
            "w": 0.027229051470836624,
            "x": -0.010598875842782268,
            "y": -0.9995021922109892,
            "z": 0.011900480379897655
          },
          "standing_position": [
            0.5200070142745972,
            -1.3151392916416331,
            17.536399841308594
          ],
          "visible_nodes": [
            0,
            1,
            94,
            95,
            96,
            97,
            98,
            99,
            167,
            168,
            169,
            170
          ]
        },
        {
          "accessible_nodes": [
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            134,
            135,
            141,
            142
          ],
          "floor_index": 0,
          "index": 68,
          "offset_point_count": 0,
          "position": [
            27.454599380493164,
            0.046850599348545074,
            -89.90270233154297
          ],
          "quaternion": {
            "w": 0.0030243523044752906,
            "x": 0.004665725470999321,
            "y": -0.999982967827708,
            "z": 0.0017770132383285015
          },
          "standing_position": [
            27.454599380493164,
            -1.225293410003968,
            -89.90270233154297
          ],
          "visible_nodes": [
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            134,
            135,
            141,
            142
          ]
        },
        {
          "accessible_nodes": [
            25,
            26,
            27,
            28,
            29,
            158,
            159,
            160,
            161
          ],
          "floor_index": 0,
          "index": 69,
          "offset_point_count": 0,
          "position": [
            -93.47100067138672,
            0.16835400462150574,
            -69.66429901123047
          ],
          "quaternion": {
            "w": 0.04863192165803725,
            "x": 0.008951588303408841,
            "y": -0.9987672046497242,
            "z": 0.00434541216973037
          },
          "standing_position": [
            -93.47100067138672,
            -1.1112243050617787,
            -69.66429901123047
          ],
          "visible_nodes": [
            25,
            26,
            27,
            28,
            29,
            158,
            159,
            160,
            161
          ]
        },
        {
          "accessible_nodes": [
            63,
            64,
            65,
            66,
            71,
            72
          ],
          "floor_index": 0,
          "index": 70,
          "offset_point_count": 0,
          "position": [
            93.50550079345703,
            -0.06108830124139786,
            -53.312801361083984
          ],
          "quaternion": {
            "w": 0.01626691406346576,
            "x": -0.007068532148675361,
            "y": -0.9997777468343008,
            "z": 0.011396745916605075
          },
          "standing_position": [
            93.50550079345703,
            -1.2696868310975544,
            -53.312801361083984
          ],
          "visible_nodes": [
            63,
            64,
            65,
            66,
            71,
            72
          ]
        },
        {
          "accessible_nodes": [
            63,
            64,
            65,
            66,
            70,
            72
          ],
          "floor_index": 0,
          "index": 71,
          "offset_point_count": 0,
          "position": [
            93.61029815673828,
            -0.06527040153741837,
            -48.658199310302734
          ],
          "quaternion": {
            "w": -0.03440643079701225,
            "x": -0.007745444102056249,
            "y": -0.9993169657238642,
            "z": 0.011035988872398306
          },
          "standing_position": [
            93.61029815673828,
            -1.3261456608826183,
            -48.658199310302734
          ],
          "visible_nodes": [
            63,
            64,
            65,
            66,
            70,
            72
          ]
        },
        {
          "accessible_nodes": [
            64,
            65,
            66,
            70,
            71,
            78
          ],
          "floor_index": 0,
          "index": 72,
          "offset_point_count": 0,
          "position": [
            93.8093032836914,
            -0.0695234015583992,
            -44.0463981628418
          ],
          "quaternion": {
            "w": 0.10989658428034337,
            "x": -0.006031169123395221,
            "y": -0.9937382766344018,
            "z": 0.01925123968595171
          },
          "standing_position": [
            93.8093032836914,
            -1.3738549678228098,
            -44.0463981628418
          ],
          "visible_nodes": [
            64,
            65,
            66,
            70,
            71,
            78
          ]
        },
        {
          "accessible_nodes": [
            74,
            75,
            76,
            78
          ],
          "floor_index": 0,
          "index": 73,
          "offset_point_count": 0,
          "position": [
            93.71829986572266,
            -0.07375679910182953,
            -39.074798583984375
          ],
          "quaternion": {
            "w": 0.028902396057292834,
            "x": -0.009074145350233365,
            "y": -0.9995100340947803,
            "z": 0.007873431255720745
          },
          "standing_position": [
            93.71829986572266,
            -1.3595115241554372,
            -39.074798583984375
          ],
          "visible_nodes": [
            74,
            75,
            76,
            78
          ]
        },
        {
          "accessible_nodes": [
            73,
            75,
            76
          ],
          "floor_index": 0,
          "index": 74,
          "offset_point_count": 0,
          "position": [
            94.056396484375,
            -0.2664330005645752,
            -33.989498138427734
          ],
          "quaternion": {
            "w": -0.017228855554401727,
            "x": -0.05139209098892389,
            "y": -0.9985298511019102,
            "z": 0.0003844369908278223
          },
          "standing_position": [
            94.056396484375,
            -1.5168370592839926,
            -33.989498138427734
          ],
          "visible_nodes": [
            73,
            75,
            76
          ]
        },
        {
          "accessible_nodes": [
            73,
            74,
            76
          ],
          "floor_index": 0,
          "index": 75,
          "offset_point_count": 0,
          "position": [
            94.41850280761719,
            -0.46136900782585144,
            -27.76930046081543
          ],
          "quaternion": {
            "w": -0.09723396138853792,
            "x": -0.019817944033705723,
            "y": -0.995059325208404,
            "z": 0.003119064591580026
          },
          "standing_position": [
            94.41850280761719,
            -1.6634212931762546,
            -27.76930046081543
          ],
          "visible_nodes": [
            73,
            74,
            76
          ]
        },
        {
          "accessible_nodes": [
            73,
            74,
            75,
            77
          ],
          "floor_index": 0,
          "index": 76,
          "offset_point_count": 0,
          "position": [
            94.3375015258789,
            -0.5072510242462158,
            -22.13170051574707
          ],
          "quaternion": {
            "w": -0.012033126020363223,
            "x": 0.0020698456220185394,
            "y": -0.9995413339287186,
            "z": 0.02771359555368161
          },
          "standing_position": [
            94.3375015258789,
            -1.7683148479619677,
            -22.13170051574707
          ],
          "visible_nodes": [
            73,
            74,
            75,
            77
          ]
        },
        {
          "accessible_nodes": [
            76
          ],
          "floor_index": 0,
          "index": 77,
          "offset_point_count": 0,
          "position": [
            90.29910278320312,
            -0.7512549757957458,
            -20.753700256347656
          ],
          "quaternion": {
            "w": 0.03549483639473968,
            "x": 0.0022766040569730576,
            "y": -0.9993581500132902,
            "z": -0.004268502137922452
          },
          "standing_position": [
            90.29910278320312,
            -1.9189675642022408,
            -20.753700256347656
          ],
          "visible_nodes": [
            76
          ]
        },
        {
          "accessible_nodes": [
            72,
            73,
            149,
            150,
            151
          ],
          "floor_index": 0,
          "index": 78,
          "offset_point_count": 0,
          "position": [
            90.54900360107422,
            -0.0913923978805542,
            -14.683500289916992
          ],
          "quaternion": {
            "w": 0.016747423190962844,
            "x": 0.0001915998031994333,
            "y": -0.9998576539770813,
            "z": 0.0020443112202092485
          },
          "standing_position": [
            90.54900360107422,
            -1.285870150394732,
            -14.683500289916992
          ],
          "visible_nodes": [
            72,
            73,
            149,
            150,
            151
          ]
        },
        {
          "accessible_nodes": [
            80,
            81,
            82,
            83
          ],
          "floor_index": 0,
          "index": 79,
          "offset_point_count": 0,
          "position": [
            90.58329772949219,
            -0.7959949970245361,
            -7.720980167388916
          ],
          "quaternion": {
            "w": 0.012471984252959967,
            "x": 0.010039947770728658,
            "y": -0.9998635631111773,
            "z": 0.004063094486660615
          },
          "standing_position": [
            90.58329772949219,
            -2.03890497752605,
            -7.720980167388916
          ],
          "visible_nodes": [
            80,
            81,
            82,
            83
          ]
        },
        {
          "accessible_nodes": [
            79,
            81,
            82,
            83
          ],
          "floor_index": 0,
          "index": 80,
          "offset_point_count": 0,
          "position": [
            90.6520004272461,
            -0.8224939703941345,
            -1.4107500314712524
          ],
          "quaternion": {
            "w": -0.023989403949686672,
            "x": 0.007651540949181893,
            "y": -0.9996809450431293,
            "z": 0.0019908127891121053
          },
          "standing_position": [
            90.6520004272461,
            -2.01877438150908,
            -1.4107500314712524
          ],
          "visible_nodes": [
            79,
            81,
            82,
            83
          ]
        },
        {
          "accessible_nodes": [
            79,
            80,
            82,
            83,
            136
          ],
          "floor_index": 0,
          "index": 81,
          "offset_point_count": 0,
          "position": [
            90.55940246582031,
            -0.10878299921751022,
            5.23337984085083
          ],
          "quaternion": {
            "w": -0.03523805390852916,
            "x": -0.007703078865851509,
            "y": -0.9993370361942385,
            "z": 0.004944037807205123
          },
          "standing_position": [
            90.55940246582031,
            -1.5468492339651174,
            5.23337984085083
          ],
          "visible_nodes": [
            79,
            80,
            82,
            83,
            136
          ]
        },
        {
          "accessible_nodes": [
            79,
            80,
            81,
            83,
            136
          ],
          "floor_index": 0,
          "index": 82,
          "offset_point_count": 0,
          "position": [
            90.70939636230469,
            -0.839011013507843,
            11.253299713134766
          ],
          "quaternion": {
            "w": -0.010522195294632629,
            "x": -0.02104851021606888,
            "y": -0.9996799761580549,
            "z": 0.009284444943698466
          },
          "standing_position": [
            90.70939636230469,
            -2.057599357441619,
            11.253299713134766
          ],
          "visible_nodes": [
            79,
            80,
            81,
            83,
            136
          ]
        },
        {
          "accessible_nodes": [
            79,
            80,
            81,
            82,
            84,
            85
          ],
          "floor_index": 0,
          "index": 83,
          "offset_point_count": 0,
          "position": [
            89.46420288085938,
            -0.11825300008058548,
            17.530799865722656
          ],
          "quaternion": {
            "w": -0.013167633818594142,
            "x": -0.004902401517967592,
            "y": -0.9999012525798224,
            "z": 0.0002666000671697034
          },
          "standing_position": [
            89.46420288085938,
            -1.3925242541495506,
            17.530799865722656
          ],
          "visible_nodes": [
            79,
            80,
            81,
            82,
            84,
            85
          ]
        },
        {
          "accessible_nodes": [
            83,
            85,
            86,
            87,
            88
          ],
          "floor_index": 0,
          "index": 84,
          "offset_point_count": 0,
          "position": [
            84.8115005493164,
            -0.11558599770069122,
            20.611099243164062
          ],
          "quaternion": {
            "w": -0.0812921518922007,
            "x": -0.012777000433599276,
            "y": -0.9965483955564651,
            "z": 0.01093816691168577
          },
          "standing_position": [
            84.8115005493164,
            -1.4209319140691477,
            20.611099243164062
          ],
          "visible_nodes": [
            83,
            85,
            86,
            87,
            88
          ]
        },
        {
          "accessible_nodes": [
            83,
            84,
            86,
            87,
            88,
            89
          ],
          "floor_index": 0,
          "index": 85,
          "offset_point_count": 0,
          "position": [
            78.39240264892578,
            -0.10944399982690811,
            22.038299560546875
          ],
          "quaternion": {
            "w": -0.12932282277480261,
            "x": -0.015483963127668959,
            "y": -0.9914798691202098,
            "z": 0.001877696982189082
          },
          "standing_position": [
            78.39240264892578,
            -1.4171207143664566,
            22.038299560546875
          ],
          "visible_nodes": [
            83,
            84,
            86,
            87,
            88,
            89
          ]
        },
        {
          "accessible_nodes": [
            84,
            85,
            87,
            88,
            89,
            90
          ],
          "floor_index": 0,
          "index": 86,
          "offset_point_count": 0,
          "position": [
            71.05799865722656,
            -0.10142499953508377,
            22.520999908447266
          ],
          "quaternion": {
            "w": 0.026518999322234563,
            "x": -0.0059897898270345005,
            "y": -0.9995469393206206,
            "z": 0.012913961668982529
          },
          "standing_position": [
            71.05799865722656,
            -1.4097115313899442,
            22.520999908447266
          ],
          "visible_nodes": [
            84,
            85,
            87,
            88,
            89,
            90
          ]
        },
        {
          "accessible_nodes": [
            84,
            85,
            86,
            88,
            89,
            90,
            91
          ],
          "floor_index": 0,
          "index": 87,
          "offset_point_count": 0,
          "position": [
            64.3949966430664,
            -0.09357509762048721,
            22.31209945678711
          ],
          "quaternion": {
            "w": 0.036558433177894395,
            "x": -0.008419328601068511,
            "y": -0.9992727749724573,
            "z": 0.006819466821674797
          },
          "standing_position": [
            64.3949966430664,
            -1.4179248230617214,
            22.31209945678711
          ],
          "visible_nodes": [
            84,
            85,
            86,
            88,
            89,
            90,
            91
          ]
        },
        {
          "accessible_nodes": [
            84,
            85,
            86,
            87,
            89,
            90,
            91,
            92
          ],
          "floor_index": 0,
          "index": 88,
          "offset_point_count": 0,
          "position": [
            57.91510009765625,
            -0.08618369698524475,
            22.387500762939453
          ],
          "quaternion": {
            "w": 0.012814924000098225,
            "x": -0.008411322213579488,
            "y": -0.9998226828128426,
            "z": 0.010937611985435688
          },
          "standing_position": [
            57.91510009765625,
            -1.3989370323449837,
            22.387500762939453
          ],
          "visible_nodes": [
            84,
            85,
            86,
            87,
            89,
            90,
            91,
            92
          ]
        },
        {
          "accessible_nodes": [
            85,
            86,
            87,
            88,
            90,
            91,
            92,
            93
          ],
          "floor_index": 0,
          "index": 89,
          "offset_point_count": 0,
          "position": [
            51.960601806640625,
            -0.07960029691457748,
            22.695999145507812
          ],
          "quaternion": {
            "w": -0.011087383309750192,
            "x": -0.00808278437448027,
            "y": -0.9998499638536777,
            "z": 0.010573247308884502
          },
          "standing_position": [
            51.960601806640625,
            -1.3866511004585045,
            22.695999145507812
          ],
          "visible_nodes": [
            85,
            86,
            87,
            88,
            90,
            91,
            92,
            93
          ]
        },
        {
          "accessible_nodes": [
            86,
            87,
            88,
            89,
            91,
            92,
            93,
            94
          ],
          "floor_index": 0,
          "index": 90,
          "offset_point_count": 0,
          "position": [
            45.05120086669922,
            -0.07163109630346298,
            22.675500869750977
          ],
          "quaternion": {
            "w": 0.016921216356216892,
            "x": -0.008440283757840714,
            "y": -0.9997626335836772,
            "z": 0.010822051408640463
          },
          "standing_position": [
            45.05120086669922,
            -1.380125057104425,
            22.675500869750977
          ],
          "visible_nodes": [
            86,
            87,
            88,
            89,
            91,
            92,
            93,
            94
          ]
        },
        {
          "accessible_nodes": [
            87,
            88,
            89,
            90,
            92,
            93,
            94,
            95
          ],
          "floor_index": 0,
          "index": 91,
          "offset_point_count": 0,
          "position": [
            37.44029998779297,
            -0.06260979920625687,
            22.37459945678711
          ],
          "quaternion": {
            "w": 0.014100165543950039,
            "x": -0.008812985680006824,
            "y": -0.9997861305656395,
            "z": 0.012297456147776945
          },
          "standing_position": [
            37.44029998779297,
            -1.3710363761850415,
            22.37459945678711
          ],
          "visible_nodes": [
            87,
            88,
            89,
            90,
            92,
            93,
            94,
            95
          ]
        },
        {
          "accessible_nodes": [
            88,
            89,
            90,
            91,
            93,
            94,
            95,
            167
          ],
          "floor_index": 0,
          "index": 92,
          "offset_point_count": 0,
          "position": [
            30.341800689697266,
            -0.05470769852399826,
            22.680599212646484
          ],
          "quaternion": {
            "w": 0.05301185840950763,
            "x": -0.008006047591210702,
            "y": -0.9985264933986808,
            "z": 0.008395567703027802
          },
          "standing_position": [
            30.341800689697266,
            -1.2897121363953192,
            22.680599212646484
          ],
          "visible_nodes": [
            88,
            89,
            90,
            91,
            93,
            94,
            95,
            167
          ]
        },
        {
          "accessible_nodes": [
            0,
            89,
            90,
            91,
            92,
            94,
            95,
            167
          ],
          "floor_index": 0,
          "index": 93,
          "offset_point_count": 0,
          "position": [
            23.65719985961914,
            -0.04659989848732948,
            22.204700469970703
          ],
          "quaternion": {
            "w": 0.031304988994166796,
            "x": -0.010832822601481934,
            "y": -0.9994029483024349,
            "z": 0.009817585210714484
          },
          "standing_position": [
            23.65719985961914,
            -1.3212917888582634,
            22.204700469970703
          ],
          "visible_nodes": [
            0,
            89,
            90,
            91,
            92,
            94,
            95,
            167
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            67,
            90,
            91,
            92,
            93,
            95,
            137,
            138,
            167
          ],
          "floor_index": 0,
          "index": 94,
          "offset_point_count": 0,
          "position": [
            16.65999984741211,
            -0.03834439814090729,
            21.97209930419922
          ],
          "quaternion": {
            "w": 0.09580853257516868,
            "x": -0.008112325058362117,
            "y": -0.9953033976834826,
            "z": 0.011227916638620406
          },
          "standing_position": [
            16.65999984741211,
            -1.3364139767418883,
            21.97209930419922
          ],
          "visible_nodes": [
            0,
            1,
            67,
            90,
            91,
            92,
            93,
            95,
            137,
            138,
            167
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            67,
            91,
            92,
            93,
            94,
            96,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            174,
            175,
            176
          ],
          "floor_index": 0,
          "index": 95,
          "offset_point_count": 0,
          "position": [
            8.29423999786377,
            -0.02911520004272461,
            22.42840003967285
          ],
          "quaternion": {
            "w": 0.05222874289964822,
            "x": -0.008756211447982453,
            "y": -0.9985750819947192,
            "z": 0.006580153569450961
          },
          "standing_position": [
            8.29423999786377,
            -1.3115108352014815,
            22.42840003967285
          ],
          "visible_nodes": [
            0,
            1,
            2,
            67,
            91,
            92,
            93,
            94,
            96,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            174,
            175,
            176
          ]
        },
        {
          "accessible_nodes": [
            0,
            67,
            95,
            97,
            98,
            99,
            100,
            167,
            168,
            169
          ],
          "floor_index": 0,
          "index": 96,
          "offset_point_count": 0,
          "position": [
            0.2666719853878021,
            -0.009234759956598282,
            10.231800079345703
          ],
          "quaternion": {
            "w": 0.0211235491611162,
            "x": -0.009673394997157284,
            "y": -0.999706135725474,
            "z": 0.006918229804587223
          },
          "standing_position": [
            0.2666719853878021,
            -1.231245332660258,
            10.231800079345703
          ],
          "visible_nodes": [
            0,
            67,
            95,
            97,
            98,
            99,
            100,
            167,
            168,
            169
          ]
        },
        {
          "accessible_nodes": [
            0,
            67,
            96,
            98,
            99,
            100,
            102,
            112,
            121,
            167,
            168
          ],
          "floor_index": 0,
          "index": 97,
          "offset_point_count": 0,
          "position": [
            0.5152930021286011,
            -0.0030763898976147175,
            2.846090078353882
          ],
          "quaternion": {
            "w": -0.02098090854578523,
            "x": -0.012352305780238576,
            "y": -0.9996579374954809,
            "z": 0.00955109483676646
          },
          "standing_position": [
            0.5152930021286011,
            -1.2627965079031278,
            2.846090078353882
          ],
          "visible_nodes": [
            0,
            67,
            96,
            98,
            99,
            100,
            102,
            112,
            121,
            167,
            168
          ]
        },
        {
          "accessible_nodes": [
            0,
            67,
            96,
            97,
            99,
            100,
            102,
            103,
            109,
            112,
            121,
            139,
            167,
            168
          ],
          "floor_index": 0,
          "index": 98,
          "offset_point_count": 0,
          "position": [
            0.714372992515564,
            0.24858899414539337,
            -3.4165000915527344
          ],
          "quaternion": {
            "w": 0.021540833960503297,
            "x": -0.01307026931846874,
            "y": -0.9996466235800661,
            "z": 0.008472140531051721
          },
          "standing_position": [
            0.714372992515564,
            -1.0793792242633662,
            -3.4165000915527344
          ],
          "visible_nodes": [
            0,
            67,
            96,
            97,
            99,
            100,
            102,
            103,
            109,
            112,
            121,
            139,
            167,
            168
          ]
        },
        {
          "accessible_nodes": [
            67,
            96,
            97,
            98,
            100,
            101,
            102,
            103,
            108,
            109,
            110,
            112,
            121,
            139,
            168
          ],
          "floor_index": 0,
          "index": 99,
          "offset_point_count": 0,
          "position": [
            0.7805619835853577,
            0.3929089903831482,
            -9.270549774169922
          ],
          "quaternion": {
            "w": 0.0017830632718680807,
            "x": -0.014107902941839742,
            "y": -0.9998814095273691,
            "z": 0.005912547584158349
          },
          "standing_position": [
            0.7805619835853577,
            -0.9466445167691504,
            -9.270549774169922
          ],
          "visible_nodes": [
            67,
            96,
            97,
            98,
            100,
            101,
            102,
            103,
            108,
            109,
            110,
            112,
            121,
            139,
            168
          ]
        },
        {
          "accessible_nodes": [
            96,
            97,
            98,
            99,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            113,
            114,
            121,
            139,
            163
          ],
          "floor_index": 0,
          "index": 100,
          "offset_point_count": 0,
          "position": [
            0.6919379830360413,
            0.28940001130104065,
            -15.915399551391602
          ],
          "quaternion": {
            "w": 0.012582827765395955,
            "x": -0.005366839793385489,
            "y": -0.9998253654939445,
            "z": 0.012732475061541345
          },
          "standing_position": [
            0.6919379830360413,
            -1.0429438111255616,
            -15.915399551391602
          ],
          "visible_nodes": [
            96,
            97,
            98,
            99,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            113,
            114,
            121,
            139,
            163
          ]
        },
        {
          "accessible_nodes": [
            99,
            100,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            112,
            113,
            114,
            115,
            121,
            139
          ],
          "floor_index": 0,
          "index": 101,
          "offset_point_count": 0,
          "position": [
            6.662360191345215,
            0.4358069896697998,
            -16.27400016784668
          ],
          "quaternion": {
            "w": -0.007590550034917155,
            "x": -0.016080667676702576,
            "y": -0.9997237166569651,
            "z": 0.015371467967774945
          },
          "standing_position": [
            6.662360191345215,
            -0.8989332514171653,
            -16.27400016784668
          ],
          "visible_nodes": [
            99,
            100,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            112,
            113,
            114,
            115,
            121,
            139
          ]
        },
        {
          "accessible_nodes": [
            97,
            98,
            99,
            100,
            101,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            113,
            114,
            115,
            121,
            122,
            139
          ],
          "floor_index": 0,
          "index": 102,
          "offset_point_count": 0,
          "position": [
            6.797939777374268,
            0.5289790034294128,
            -23.444499969482422
          ],
          "quaternion": {
            "w": 0.05719946143421822,
            "x": -0.0008454840751970113,
            "y": -0.998348481652968,
            "z": 0.005273311105908016
          },
          "standing_position": [
            6.797939777374268,
            -0.807391145336187,
            -23.444499969482422
          ],
          "visible_nodes": [
            97,
            98,
            99,
            100,
            101,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            113,
            114,
            115,
            121,
            122,
            139
          ]
        },
        {
          "accessible_nodes": [
            98,
            99,
            100,
            101,
            102,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            113,
            122
          ],
          "floor_index": 0,
          "index": 103,
          "offset_point_count": 0,
          "position": [
            6.756820201873779,
            0.6266800165176392,
            -31.119199752807617
          ],
          "quaternion": {
            "w": 0.021642150675423244,
            "x": 0.006530294602565349,
            "y": -0.9997406265532898,
            "z": 0.0027682493280284082
          },
          "standing_position": [
            6.756820201873779,
            -0.7019850119127342,
            -31.119199752807617
          ],
          "visible_nodes": [
            98,
            99,
            100,
            101,
            102,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            113,
            122
          ]
        },
        {
          "accessible_nodes": [
            100,
            101,
            102,
            103,
            105,
            106,
            107,
            108,
            109,
            110
          ],
          "floor_index": 0,
          "index": 104,
          "offset_point_count": 0,
          "position": [
            6.592879772186279,
            0.7179520130157471,
            -39.10419845581055
          ],
          "quaternion": {
            "w": -0.044698440562543545,
            "x": -0.0021609574022294063,
            "y": -0.998982612320125,
            "z": 0.005577725752152958
          },
          "standing_position": [
            6.592879772186279,
            -0.6397006038251176,
            -39.10419845581055
          ],
          "visible_nodes": [
            100,
            101,
            102,
            103,
            105,
            106,
            107,
            108,
            109,
            110
          ]
        },
        {
          "accessible_nodes": [
            100,
            101,
            102,
            103,
            104,
            106,
            107,
            108,
            109,
            110,
            111,
            113
          ],
          "floor_index": 0,
          "index": 105,
          "offset_point_count": 0,
          "position": [
            0.5477259755134583,
            0.5564870238304138,
            -39.4650993347168
          ],
          "quaternion": {
            "w": 0.03512087849907248,
            "x": -0.0017863877639391365,
            "y": -0.9993643155818068,
            "z": 0.005855673788343135
          },
          "standing_position": [
            0.5477259755134583,
            -0.7747556639804891,
            -39.4650993347168
          ],
          "visible_nodes": [
            100,
            101,
            102,
            103,
            104,
            106,
            107,
            108,
            109,
            110,
            111,
            113
          ]
        },
        {
          "accessible_nodes": [
            100,
            101,
            102,
            103,
            104,
            105,
            107,
            108,
            109,
            110,
            122
          ],
          "floor_index": 0,
          "index": 106,
          "offset_point_count": 0,
          "position": [
            -6.193150043487549,
            0.38151898980140686,
            -39.33110046386719
          ],
          "quaternion": {
            "w": 0.03538241835024455,
            "x": 0.0009132431959431392,
            "y": -0.9992561926846687,
            "z": 0.015307320094391699
          },
          "standing_position": [
            -6.193150043487549,
            -0.9206802401330139,
            -39.33110046386719
          ],
          "visible_nodes": [
            100,
            101,
            102,
            103,
            104,
            105,
            107,
            108,
            109,
            110,
            122
          ]
        },
        {
          "accessible_nodes": [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            108,
            109,
            110,
            122,
            123,
            126
          ],
          "floor_index": 0,
          "index": 107,
          "offset_point_count": 0,
          "position": [
            -12.19909954071045,
            0.2468000054359436,
            -39.32229995727539
          ],
          "quaternion": {
            "w": 0.044815135276742274,
            "x": 0.0002083413751272504,
            "y": -0.9989058349837646,
            "z": 0.013367440782206957
          },
          "standing_position": [
            -12.19909954071045,
            -1.1004772427256178,
            -39.32229995727539
          ],
          "visible_nodes": [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            108,
            109,
            110,
            122,
            123,
            126
          ]
        },
        {
          "accessible_nodes": [
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            109,
            110,
            112,
            122,
            123,
            126
          ],
          "floor_index": 0,
          "index": 108,
          "offset_point_count": 0,
          "position": [
            -11.779600143432617,
            0.18608500063419342,
            -32.30509948730469
          ],
          "quaternion": {
            "w": 0.024096591101153326,
            "x": -0.0018243245652913827,
            "y": -0.9996266189524877,
            "z": 0.01275373963972228
          },
          "standing_position": [
            -11.779600143432617,
            -1.0573482445922904,
            -32.30509948730469
          ],
          "visible_nodes": [
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            109,
            110,
            112,
            122,
            123,
            126
          ]
        },
        {
          "accessible_nodes": [
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            110,
            112,
            113,
            122,
            123
          ],
          "floor_index": 0,
          "index": 109,
          "offset_point_count": 0,
          "position": [
            -13.137399673461914,
            0.12743400037288666,
            -27.351999282836914
          ],
          "quaternion": {
            "w": 0.010072953938854018,
            "x": -0.005739826338078104,
            "y": -0.9998905822378108,
            "z": 0.009187953043523916
          },
          "standing_position": [
            -13.137399673461914,
            -1.1163708867722872,
            -27.351999282836914
          ],
          "visible_nodes": [
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            110,
            112,
            113,
            122,
            123
          ]
        },
        {
          "accessible_nodes": [
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            111,
            112,
            113,
            122
          ],
          "floor_index": 0,
          "index": 110,
          "offset_point_count": 0,
          "position": [
            -13.086600303649902,
            0.06362300366163254,
            -21.197200775146484
          ],
          "quaternion": {
            "w": -0.009971570615179103,
            "x": -0.01070087264487216,
            "y": -0.9998249332846979,
            "z": 0.011668289884700768
          },
          "standing_position": [
            -13.086600303649902,
            -1.1733511670755066,
            -21.197200775146484
          ],
          "visible_nodes": [
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            111,
            112,
            113,
            122
          ]
        },
        {
          "accessible_nodes": [
            102,
            103,
            105,
            110,
            112,
            121,
            139,
            163,
            164,
            165
          ],
          "floor_index": 0,
          "index": 111,
          "offset_point_count": 0,
          "position": [
            -16.97559928894043,
            -0.03884650021791458,
            -15.809700012207031
          ],
          "quaternion": {
            "w": -0.052129083942455315,
            "x": -0.00585155010879039,
            "y": -0.9984832078622956,
            "z": 0.016721356774941243
          },
          "standing_position": [
            -16.97559928894043,
            -1.2445519864386778,
            -15.809700012207031
          ],
          "visible_nodes": [
            102,
            103,
            105,
            110,
            112,
            121,
            139,
            163,
            164,
            165
          ]
        },
        {
          "accessible_nodes": [
            97,
            98,
            99,
            101,
            108,
            109,
            110,
            111,
            121,
            139,
            163,
            164
          ],
          "floor_index": 0,
          "index": 112,
          "offset_point_count": 0,
          "position": [
            -17.622800827026367,
            -0.05135029926896095,
            -7.255980014801025
          ],
          "quaternion": {
            "w": -0.029219851169917828,
            "x": -0.006163051879475537,
            "y": -0.9993104196214623,
            "z": 0.022065765395027068
          },
          "standing_position": [
            -17.622800827026367,
            -1.3220911926609409,
            -7.255980014801025
          ],
          "visible_nodes": [
            97,
            98,
            99,
            101,
            108,
            109,
            110,
            111,
            121,
            139,
            163,
            164
          ]
        },
        {
          "accessible_nodes": [
            100,
            101,
            102,
            103,
            105,
            109,
            110,
            114,
            115
          ],
          "floor_index": 0,
          "index": 113,
          "offset_point_count": 0,
          "position": [
            14.53950023651123,
            0.640404999256134,
            -16.342199325561523
          ],
          "quaternion": {
            "w": -0.05010409881645522,
            "x": -0.004767360839780174,
            "y": -0.9986748707220623,
            "z": 0.010740303719420235
          },
          "standing_position": [
            14.53950023651123,
            -0.7138303308352894,
            -16.342199325561523
          ],
          "visible_nodes": [
            100,
            101,
            102,
            103,
            105,
            109,
            110,
            114,
            115
          ]
        },
        {
          "accessible_nodes": [
            100,
            101,
            102,
            113,
            115,
            117,
            118,
            148
          ],
          "floor_index": 0,
          "index": 114,
          "offset_point_count": 0,
          "position": [
            24.104000091552734,
            0.8982579708099365,
            -16.166099548339844
          ],
          "quaternion": {
            "w": -0.11285050235593014,
            "x": 0.0074109033758314865,
            "y": -0.9935597144588948,
            "z": 0.006994899508233422
          },
          "standing_position": [
            24.104000091552734,
            -0.3791439228072526,
            -16.166099548339844
          ],
          "visible_nodes": [
            100,
            101,
            102,
            113,
            115,
            117,
            118,
            148
          ]
        },
        {
          "accessible_nodes": [
            101,
            102,
            113,
            114,
            117,
            118,
            119,
            145,
            146,
            147,
            148
          ],
          "floor_index": 0,
          "index": 115,
          "offset_point_count": 0,
          "position": [
            31.601299285888672,
            1.0885000228881836,
            -16.059900283813477
          ],
          "quaternion": {
            "w": 0.002635289076239446,
            "x": -0.00023215856213932784,
            "y": -0.9999578213737226,
            "z": 0.008795148528262077
          },
          "standing_position": [
            31.601299285888672,
            -0.2486527435071222,
            -16.059900283813477
          ],
          "visible_nodes": [
            101,
            102,
            113,
            114,
            117,
            118,
            119,
            145,
            146,
            147,
            148
          ]
        },
        {
          "accessible_nodes": [
            117,
            118,
            119,
            120,
            146,
            147
          ],
          "floor_index": 0,
          "index": 116,
          "offset_point_count": 0,
          "position": [
            39.74039840698242,
            1.3018399477005005,
            -15.705900192260742
          ],
          "quaternion": {
            "w": 0.011833161003038654,
            "x": -0.002197602631850016,
            "y": -0.9998665661003676,
            "z": 0.011045250568871099
          },
          "standing_position": [
            39.74039840698242,
            -0.0970445207403261,
            -15.705900192260742
          ],
          "visible_nodes": [
            117,
            118,
            119,
            120,
            146,
            147
          ]
        },
        {
          "accessible_nodes": [
            114,
            115,
            116,
            118,
            119,
            120,
            149
          ],
          "floor_index": 0,
          "index": 117,
          "offset_point_count": 0,
          "position": [
            45.87839889526367,
            -0.03946949914097786,
            -15.274399757385254
          ],
          "quaternion": {
            "w": 0.004384783107808854,
            "x": 0.007178438196165607,
            "y": -0.9999536414129667,
            "z": 0.00468699615944998
          },
          "standing_position": [
            45.87839889526367,
            -1.3508380050529993,
            -15.274399757385254
          ],
          "visible_nodes": [
            114,
            115,
            116,
            118,
            119,
            120,
            149
          ]
        },
        {
          "accessible_nodes": [
            114,
            115,
            116,
            117,
            119,
            120,
            149,
            150
          ],
          "floor_index": 0,
          "index": 118,
          "offset_point_count": 0,
          "position": [
            52.80830001831055,
            -0.0471842996776104,
            -15.572600364685059
          ],
          "quaternion": {
            "w": -0.010754358692385632,
            "x": 0.007280759106996089,
            "y": -0.9999064535851399,
            "z": 0.004293596389697256
          },
          "standing_position": [
            52.80830001831055,
            -1.3848454612672465,
            -15.572600364685059
          ],
          "visible_nodes": [
            114,
            115,
            116,
            117,
            119,
            120,
            149,
            150
          ]
        },
        {
          "accessible_nodes": [
            115,
            116,
            117,
            118,
            120,
            149,
            150,
            151
          ],
          "floor_index": 0,
          "index": 119,
          "offset_point_count": 0,
          "position": [
            57.926998138427734,
            -0.05290000140666962,
            -15.773099899291992
          ],
          "quaternion": {
            "w": -0.00021581462656833277,
            "x": 0.010343232385835016,
            "y": -0.9999442904571002,
            "z": -0.002097546793849988
          },
          "standing_position": [
            57.926998138427734,
            -1.3629470543341669,
            -15.773099899291992
          ],
          "visible_nodes": [
            115,
            116,
            117,
            118,
            120,
            149,
            150,
            151
          ]
        },
        {
          "accessible_nodes": [
            116,
            117,
            118,
            119,
            149,
            150,
            151
          ],
          "floor_index": 0,
          "index": 120,
          "offset_point_count": 0,
          "position": [
            63.947601318359375,
            -0.0596931017935276,
            -15.928199768066406
          ],
          "quaternion": {
            "w": -0.041341991659583015,
            "x": 0.009176349206635825,
            "y": -0.9990897282507556,
            "z": 0.005132706781320086
          },
          "standing_position": [
            63.947601318359375,
            -1.3240061879424956,
            -15.928199768066406
          ],
          "visible_nodes": [
            116,
            117,
            118,
            119,
            149,
            150,
            151
          ]
        },
        {
          "accessible_nodes": [
            97,
            98,
            99,
            100,
            101,
            102,
            111,
            112,
            139,
            163,
            164,
            165
          ],
          "floor_index": 0,
          "index": 121,
          "offset_point_count": 0,
          "position": [
            -9.779840469360352,
            0.014764600433409214,
            -4.022540092468262
          ],
          "quaternion": {
            "w": 0.0030212087763215973,
            "x": 0.01090665511988682,
            "y": -0.9999350809840196,
            "z": 0.0013191280434708787
          },
          "standing_position": [
            -9.779840469360352,
            -1.2141847887985522,
            -4.022540092468262
          ],
          "visible_nodes": [
            97,
            98,
            99,
            100,
            101,
            102,
            111,
            112,
            139,
            163,
            164,
            165
          ]
        },
        {
          "accessible_nodes": [
            102,
            103,
            106,
            107,
            108,
            109,
            110,
            123,
            126,
            140
          ],
          "floor_index": 0,
          "index": 122,
          "offset_point_count": 0,
          "position": [
            -12.862600326538086,
            0.053789298981428146,
            -44.680999755859375
          ],
          "quaternion": {
            "w": -0.023131256041669785,
            "x": 0.009355690848527439,
            "y": -0.9996828902634054,
            "z": 0.0033966264742339236
          },
          "standing_position": [
            -12.862600326538086,
            -1.1712412907048857,
            -44.680999755859375
          ],
          "visible_nodes": [
            102,
            103,
            106,
            107,
            108,
            109,
            110,
            123,
            126,
            140
          ]
        },
        {
          "accessible_nodes": [
            107,
            108,
            109,
            122,
            124,
            125,
            126,
            127,
            140
          ],
          "floor_index": 0,
          "index": 123,
          "offset_point_count": 0,
          "position": [
            -14.43690013885498,
            0.061968401074409485,
            -51.97829818725586
          ],
          "quaternion": {
            "w": 0.057687249503558954,
            "x": 0.00998306362241255,
            "y": -0.998283977674984,
            "z": 0.0012755807515911696
          },
          "standing_position": [
            -14.43690013885498,
            -1.1723361165762596,
            -51.97829818725586
          ],
          "visible_nodes": [
            107,
            108,
            109,
            122,
            124,
            125,
            126,
            127,
            140
          ]
        },
        {
          "accessible_nodes": [
            123,
            125,
            126
          ],
          "floor_index": 0,
          "index": 124,
          "offset_point_count": 0,
          "position": [
            -22.89940071105957,
            0.07226250320672989,
            -52.614898681640625
          ],
          "quaternion": {
            "w": 0.0019106460687786416,
            "x": 0.007942824786409402,
            "y": -0.9999657416435979,
            "z": 0.0013360735815694579
          },
          "standing_position": [
            -22.89940071105957,
            -1.162434955084873,
            -52.614898681640625
          ],
          "visible_nodes": [
            123,
            125,
            126
          ]
        },
        {
          "accessible_nodes": [
            123,
            124
          ],
          "floor_index": 0,
          "index": 125,
          "offset_point_count": 0,
          "position": [
            -32.21670150756836,
            0.08284589648246765,
            -52.45560073852539
          ],
          "quaternion": {
            "w": -0.021621010418400328,
            "x": 0.006335592722846255,
            "y": -0.9997403806203116,
            "z": 0.0034017297722698046
          },
          "standing_position": [
            -32.21670150756836,
            -1.2296527891588083,
            -52.45560073852539
          ],
          "visible_nodes": [
            123,
            124
          ]
        },
        {
          "accessible_nodes": [
            46,
            47,
            107,
            108,
            122,
            123,
            124,
            127,
            128,
            140,
            152
          ],
          "floor_index": 0,
          "index": 126,
          "offset_point_count": 0,
          "position": [
            -13.732099533081055,
            0.06860169768333435,
            -60.510101318359375
          ],
          "quaternion": {
            "w": 0.019307023817260308,
            "x": 0.009489238577011679,
            "y": -0.9997667249152,
            "z": 0.0019203941477258179
          },
          "standing_position": [
            -13.732099533081055,
            -1.1579972343008251,
            -60.510101318359375
          ],
          "visible_nodes": [
            46,
            47,
            107,
            108,
            122,
            123,
            124,
            127,
            128,
            140,
            152
          ]
        },
        {
          "accessible_nodes": [
            46,
            47,
            48,
            123,
            126,
            128,
            129,
            130,
            131,
            140,
            152,
            153
          ],
          "floor_index": 0,
          "index": 127,
          "offset_point_count": 0,
          "position": [
            -14.594499588012695,
            0.0823414996266365,
            -75.11910247802734
          ],
          "quaternion": {
            "w": 0.01782889458892152,
            "x": 0.02022827042732247,
            "y": -0.999604787812286,
            "z": 0.007949892276280183
          },
          "standing_position": [
            -14.594499588012695,
            -1.1944014511553624,
            -75.11910247802734
          ],
          "visible_nodes": [
            46,
            47,
            48,
            123,
            126,
            128,
            129,
            130,
            131,
            140,
            152,
            153
          ]
        },
        {
          "accessible_nodes": [
            45,
            46,
            47,
            48,
            126,
            127,
            140,
            152
          ],
          "floor_index": 0,
          "index": 128,
          "offset_point_count": 0,
          "position": [
            -16.313499450683594,
            0.09178079664707184,
            -83.6698989868164
          ],
          "quaternion": {
            "w": 0.0030229951616470335,
            "x": 0.011307105756901338,
            "y": -0.9999199105019997,
            "z": 0.004813884126116814
          },
          "standing_position": [
            -16.313499450683594,
            -1.0998587975286234,
            -83.6698989868164
          ],
          "visible_nodes": [
            45,
            46,
            47,
            48,
            126,
            127,
            140,
            152
          ]
        },
        {
          "accessible_nodes": [
            127,
            130,
            131,
            132,
            152,
            153
          ],
          "floor_index": 0,
          "index": 129,
          "offset_point_count": 0,
          "position": [
            -5.047019958496094,
            0.07056500017642975,
            -74.2146987915039
          ],
          "quaternion": {
            "w": -0.021518238697638598,
            "x": 0.010992747236642444,
            "y": -0.9997068660967355,
            "z": 0.0015133986295373149
          },
          "standing_position": [
            -5.047019958496094,
            -1.2291825160125498,
            -74.2146987915039
          ],
          "visible_nodes": [
            127,
            130,
            131,
            132,
            152,
            153
          ]
        },
        {
          "accessible_nodes": [
            127,
            129,
            131,
            132,
            133
          ],
          "floor_index": 0,
          "index": 130,
          "offset_point_count": 0,
          "position": [
            2.0689899921417236,
            0.06260780245065689,
            -74.48059844970703
          ],
          "quaternion": {
            "w": -0.06402197526945541,
            "x": 0.007141084221126546,
            "y": -0.9979198994647218,
            "z": 0.002462807958264743
          },
          "standing_position": [
            2.0689899921417236,
            -1.23721565927876,
            -74.48059844970703
          ],
          "visible_nodes": [
            127,
            129,
            131,
            132,
            133
          ]
        },
        {
          "accessible_nodes": [
            127,
            129,
            130,
            132,
            133,
            141
          ],
          "floor_index": 0,
          "index": 131,
          "offset_point_count": 0,
          "position": [
            11.402400016784668,
            0.05215660110116005,
            -74.81269836425781
          ],
          "quaternion": {
            "w": -0.07149797566823499,
            "x": 0.007975969280403212,
            "y": -0.9974058896081527,
            "z": 0.002433241344689482
          },
          "standing_position": [
            11.402400016784668,
            -1.2416875634800841,
            -74.81269836425781
          ],
          "visible_nodes": [
            127,
            129,
            130,
            132,
            133,
            141
          ]
        },
        {
          "accessible_nodes": [
            129,
            130,
            131,
            133,
            141
          ],
          "floor_index": 0,
          "index": 132,
          "offset_point_count": 0,
          "position": [
            19.10379981994629,
            0.04340849816799164,
            -74.94419860839844
          ],
          "quaternion": {
            "w": -0.030380329697586226,
            "x": 0.00769709031614204,
            "y": -0.9995079916328743,
            "z": 0.001255848109209394
          },
          "standing_position": [
            19.10379981994629,
            -1.2205074996169545,
            -74.94419860839844
          ],
          "visible_nodes": [
            129,
            130,
            131,
            133,
            141
          ]
        },
        {
          "accessible_nodes": [
            54,
            130,
            131,
            132,
            134,
            135,
            141,
            142
          ],
          "floor_index": 0,
          "index": 133,
          "offset_point_count": 0,
          "position": [
            26.426799774169922,
            0.03511049970984459,
            -75.09239959716797
          ],
          "quaternion": {
            "w": 0.020566116326491295,
            "x": 0.010217746374421223,
            "y": -0.9997362072029685,
            "z": 0.0003792454277351264
          },
          "standing_position": [
            26.426799774169922,
            -1.224862345314134,
            -75.09239959716797
          ],
          "visible_nodes": [
            54,
            130,
            131,
            132,
            134,
            135,
            141,
            142
          ]
        },
        {
          "accessible_nodes": [
            54,
            68,
            133,
            135,
            141,
            142,
            143,
            144
          ],
          "floor_index": 0,
          "index": 134,
          "offset_point_count": 0,
          "position": [
            33.44279861450195,
            0.03176860138773918,
            -80.51570129394531
          ],
          "quaternion": {
            "w": 0.0030244796538731362,
            "x": 0.007928746382956927,
            "y": -0.9999531794554474,
            "z": 0.004651428751741206
          },
          "standing_position": [
            33.44279861450195,
            -1.2514893405340715,
            -80.51570129394531
          ],
          "visible_nodes": [
            54,
            68,
            133,
            135,
            141,
            142,
            143,
            144
          ]
        },
        {
          "accessible_nodes": [
            54,
            55,
            68,
            133,
            134,
            141,
            142,
            143
          ],
          "floor_index": 0,
          "index": 135,
          "offset_point_count": 0,
          "position": [
            33.86869812011719,
            0.034341000020504,
            -84.02559661865234
          ],
          "quaternion": {
            "w": 0.003023961153319455,
            "x": 0.008260084786556819,
            "y": -0.999953321023097,
            "z": 0.003998882769311249
          },
          "standing_position": [
            33.86869812011719,
            -1.231177297500663,
            -84.02559661865234
          ],
          "visible_nodes": [
            54,
            55,
            68,
            133,
            134,
            141,
            142,
            143
          ]
        },
        {
          "accessible_nodes": [
            81,
            82
          ],
          "floor_index": 0,
          "index": 136,
          "offset_point_count": 0,
          "position": [
            86.79070281982422,
            -0.1065329983830452,
            7.6254801750183105
          ],
          "quaternion": {
            "w": 0.7104574824302352,
            "x": 0.020787231200791446,
            "y": -0.7034282441019607,
            "z": 0.0025993117343425733
          },
          "standing_position": [
            86.79070281982422,
            -1.3371603389395936,
            7.6254801750183105
          ],
          "visible_nodes": [
            81,
            82
          ]
        },
        {
          "accessible_nodes": [
            94,
            138
          ],
          "floor_index": 0,
          "index": 137,
          "offset_point_count": 0,
          "position": [
            16.31450080871582,
            -0.03481459990143776,
            18.382400512695312
          ],
          "quaternion": {
            "w": -0.012617133157398286,
            "x": 0.012157411302076666,
            "y": -0.9998347250138693,
            "z": 0.004849571378772569
          },
          "standing_position": [
            16.31450080871582,
            -1.1827899594239712,
            18.382400512695312
          ],
          "visible_nodes": [
            94,
            138
          ]
        },
        {
          "accessible_nodes": [
            94,
            137
          ],
          "floor_index": 0,
          "index": 138,
          "offset_point_count": 0,
          "position": [
            16.188600540161133,
            -0.031384799629449844,
            14.61769962310791
          ],
          "quaternion": {
            "w": -0.041086598805915205,
            "x": 0.011530536251987288,
            "y": -0.9990259507968944,
            "z": 0.011228390521859847
          },
          "standing_position": [
            16.188600540161133,
            -1.3269142842454897,
            14.61769962310791
          ],
          "visible_nodes": [
            94,
            137
          ]
        },
        {
          "accessible_nodes": [
            98,
            99,
            100,
            101,
            102,
            111,
            112,
            121,
            163,
            164,
            165
          ],
          "floor_index": 0,
          "index": 139,
          "offset_point_count": 0,
          "position": [
            -13.873299598693848,
            -0.01130759995430708,
            -2.8443799018859863
          ],
          "quaternion": {
            "w": -0.020721111752192874,
            "x": -0.006969975030607648,
            "y": -0.9997026701810916,
            "z": 0.010799514412846687
          },
          "standing_position": [
            -13.873299598693848,
            -1.2750539196588393,
            -2.8443799018859863
          ],
          "visible_nodes": [
            98,
            99,
            100,
            101,
            102,
            111,
            112,
            121,
            163,
            164,
            165
          ]
        },
        {
          "accessible_nodes": [
            46,
            47,
            122,
            123,
            126,
            127,
            128,
            152,
            153,
            154
          ],
          "floor_index": 0,
          "index": 140,
          "offset_point_count": 0,
          "position": [
            -13.233099937438965,
            0.07541149854660034,
            -68.97250366210938
          ],
          "quaternion": {
            "w": 0.04708360570046587,
            "x": 0.008695250891294162,
            "y": -0.9988241733417657,
            "z": 0.0076022880609491325
          },
          "standing_position": [
            -13.233099937438965,
            -1.1768234797179913,
            -68.97250366210938
          ],
          "visible_nodes": [
            46,
            47,
            122,
            123,
            126,
            127,
            128,
            152,
            153,
            154
          ]
        },
        {
          "accessible_nodes": [
            54,
            68,
            131,
            132,
            133,
            134,
            135,
            142,
            143,
            144,
            145
          ],
          "floor_index": 0,
          "index": 141,
          "offset_point_count": 0,
          "position": [
            32.845699310302734,
            0.026827199384570122,
            -74.06520080566406
          ],
          "quaternion": {
            "w": -0.06658785772170411,
            "x": 0.0041500245755903544,
            "y": -0.9977719176414918,
            "z": 0.00017411632014928258
          },
          "standing_position": [
            32.845699310302734,
            -1.2605563371587245,
            -74.06520080566406
          ],
          "visible_nodes": [
            54,
            68,
            131,
            132,
            133,
            134,
            135,
            142,
            143,
            144,
            145
          ]
        },
        {
          "accessible_nodes": [
            68,
            133,
            134,
            135,
            141,
            143,
            144,
            145,
            146
          ],
          "floor_index": 0,
          "index": 142,
          "offset_point_count": 0,
          "position": [
            34.89419937133789,
            0.01788710057735443,
            -66.52110290527344
          ],
          "quaternion": {
            "w": -0.035394605599097906,
            "x": 0.011920955527234418,
            "y": -0.9992976553440215,
            "z": -0.003050800152832784
          },
          "standing_position": [
            34.89419937133789,
            -1.2598346570264232,
            -66.52110290527344
          ],
          "visible_nodes": [
            68,
            133,
            134,
            135,
            141,
            143,
            144,
            145,
            146
          ]
        },
        {
          "accessible_nodes": [
            134,
            135,
            141,
            142,
            144,
            145,
            146,
            147
          ],
          "floor_index": 0,
          "index": 143,
          "offset_point_count": 0,
          "position": [
            35.49169921875,
            0.010377200320363045,
            -58.70240020751953
          ],
          "quaternion": {
            "w": 0.0313666794542977,
            "x": 0.009121588370653237,
            "y": -0.9994560639913623,
            "z": -0.004527314718686325
          },
          "standing_position": [
            35.49169921875,
            -1.2717453968399486,
            -58.70240020751953
          ],
          "visible_nodes": [
            134,
            135,
            141,
            142,
            144,
            145,
            146,
            147
          ]
        },
        {
          "accessible_nodes": [
            134,
            141,
            142,
            143,
            145,
            146,
            147,
            148
          ],
          "floor_index": 0,
          "index": 144,
          "offset_point_count": 0,
          "position": [
            34.86360168457031,
            0.004990629851818085,
            -51.70069885253906
          ],
          "quaternion": {
            "w": 0.021183043787557133,
            "x": 0.012450735775095005,
            "y": -0.9996775539412601,
            "z": -0.006406863647328019
          },
          "standing_position": [
            34.86360168457031,
            -1.2647141893551372,
            -51.70069885253906
          ],
          "visible_nodes": [
            134,
            141,
            142,
            143,
            145,
            146,
            147,
            148
          ]
        },
        {
          "accessible_nodes": [
            115,
            141,
            142,
            143,
            144,
            146,
            147,
            148
          ],
          "floor_index": 0,
          "index": 145,
          "offset_point_count": 0,
          "position": [
            34.66310119628906,
            -0.0005702230264432728,
            -45.063201904296875
          ],
          "quaternion": {
            "w": -0.015167260354991158,
            "x": 0.01186546014807151,
            "y": -0.9998097536793681,
            "z": -0.0031015597725847677
          },
          "standing_position": [
            34.66310119628906,
            -1.2821500162349406,
            -45.063201904296875
          ],
          "visible_nodes": [
            115,
            141,
            142,
            143,
            144,
            146,
            147,
            148
          ]
        },
        {
          "accessible_nodes": [
            115,
            116,
            142,
            143,
            144,
            145,
            147,
            148
          ],
          "floor_index": 0,
          "index": 146,
          "offset_point_count": 0,
          "position": [
            34.50630187988281,
            -0.007546300068497658,
            -36.86149978637695
          ],
          "quaternion": {
            "w": 0.01275518554964819,
            "x": 0.015362844035143784,
            "y": -0.9997937541109745,
            "z": -0.0037062361500436796
          },
          "standing_position": [
            34.50630187988281,
            -1.3072698632276711,
            -36.86149978637695
          ],
          "visible_nodes": [
            115,
            116,
            142,
            143,
            144,
            145,
            147,
            148
          ]
        },
        {
          "accessible_nodes": [
            115,
            116,
            143,
            144,
            145,
            146,
            148
          ],
          "floor_index": 0,
          "index": 147,
          "offset_point_count": 0,
          "position": [
            34.46480178833008,
            -0.01390410028398037,
            -29.52039909362793
          ],
          "quaternion": {
            "w": 0.0030217631616339044,
            "x": 0.012296684407380257,
            "y": -0.9999138601276801,
            "z": 0.0034551543175025683
          },
          "standing_position": [
            34.46480178833008,
            -1.2913700395609646,
            -29.52039909362793
          ],
          "visible_nodes": [
            115,
            116,
            143,
            144,
            145,
            146,
            148
          ]
        },
        {
          "accessible_nodes": [
            114,
            115,
            144,
            145,
            146,
            147
          ],
          "floor_index": 0,
          "index": 148,
          "offset_point_count": 0,
          "position": [
            34.35710144042969,
            -0.019323699176311493,
            -23.167200088500977
          ],
          "quaternion": {
            "w": 0.0030213796835268547,
            "x": 0.0110365674007841,
            "y": -0.9999330393903137,
            "z": 0.0017282184037851385
          },
          "standing_position": [
            34.35710144042969,
            -1.2354517949873847,
            -23.167200088500977
          ],
          "visible_nodes": [
            114,
            115,
            144,
            145,
            146,
            147
          ]
        },
        {
          "accessible_nodes": [
            78,
            117,
            118,
            119,
            120,
            150,
            151
          ],
          "floor_index": 0,
          "index": 149,
          "offset_point_count": 0,
          "position": [
            70.18319702148438,
            -0.06595160067081451,
            -16.979700088500977
          ],
          "quaternion": {
            "w": 0.040302921093173315,
            "x": 0.011633220503390527,
            "y": -0.999119258994889,
            "z": -0.0010276528151250762
          },
          "standing_position": [
            70.18319702148438,
            -1.3695422559898085,
            -16.979700088500977
          ],
          "visible_nodes": [
            78,
            117,
            118,
            119,
            120,
            150,
            151
          ]
        },
        {
          "accessible_nodes": [
            78,
            118,
            119,
            120,
            149,
            151,
            162
          ],
          "floor_index": 0,
          "index": 150,
          "offset_point_count": 0,
          "position": [
            78.79239654541016,
            -0.07531890273094177,
            -17.599000930786133
          ],
          "quaternion": {
            "w": 0.02562108771470235,
            "x": 0.005855309780692061,
            "y": -0.9996526606654902,
            "z": -0.0019555519833509625
          },
          "standing_position": [
            78.79239654541016,
            -1.3522482989006936,
            -17.599000930786133
          ],
          "visible_nodes": [
            78,
            118,
            119,
            120,
            149,
            151,
            162
          ]
        },
        {
          "accessible_nodes": [
            78,
            119,
            120,
            149,
            150
          ],
          "floor_index": 0,
          "index": 151,
          "offset_point_count": 0,
          "position": [
            84.9979019165039,
            -0.08232259750366211,
            -17.756799697875977
          ],
          "quaternion": {
            "w": -0.0500415914010902,
            "x": 0.0023406195749589437,
            "y": -0.9986982067891893,
            "z": -0.009604852707409
          },
          "standing_position": [
            84.9979019165039,
            -1.3540966935642942,
            -17.756799697875977
          ],
          "visible_nodes": [
            78,
            119,
            120,
            149,
            150
          ]
        },
        {
          "accessible_nodes": [
            47,
            48,
            126,
            127,
            128,
            129,
            140,
            153,
            154,
            155
          ],
          "floor_index": 0,
          "index": 152,
          "offset_point_count": 0,
          "position": [
            -20.76449966430664,
            0.0846467986702919,
            -69.62359619140625
          ],
          "quaternion": {
            "w": -0.015458029832635412,
            "x": 0.007696799379942047,
            "y": -0.999850574892778,
            "z": 0.0007886904146381712
          },
          "standing_position": [
            -20.76449966430664,
            -1.15571666059953,
            -69.62359619140625
          ],
          "visible_nodes": [
            47,
            48,
            126,
            127,
            128,
            129,
            140,
            153,
            154,
            155
          ]
        },
        {
          "accessible_nodes": [
            127,
            129,
            140,
            152,
            154,
            155,
            156,
            157
          ],
          "floor_index": 0,
          "index": 153,
          "offset_point_count": 0,
          "position": [
            -27.745899200439453,
            0.09289859980344772,
            -69.8729019165039
          ],
          "quaternion": {
            "w": -0.01959885659893946,
            "x": 0.010551056119859441,
            "y": -0.9997506650386848,
            "z": 0.0017804935236242605
          },
          "standing_position": [
            -27.745899200439453,
            -1.1923808263186169,
            -69.8729019165039
          ],
          "visible_nodes": [
            127,
            129,
            140,
            152,
            154,
            155,
            156,
            157
          ]
        },
        {
          "accessible_nodes": [
            140,
            152,
            153,
            155,
            156,
            157,
            158
          ],
          "floor_index": 0,
          "index": 154,
          "offset_point_count": 0,
          "position": [
            -36.3942985534668,
            0.10294099897146225,
            -69.97540283203125
          ],
          "quaternion": {
            "w": -0.054195037198421184,
            "x": 0.008175360336069314,
            "y": -0.998490945821312,
            "z": 0.003450167995441542
          },
          "standing_position": [
            -36.3942985534668,
            -1.2171056809247547,
            -69.97540283203125
          ],
          "visible_nodes": [
            140,
            152,
            153,
            155,
            156,
            157,
            158
          ]
        },
        {
          "accessible_nodes": [
            152,
            153,
            154,
            156,
            157,
            158
          ],
          "floor_index": 0,
          "index": 155,
          "offset_point_count": 0,
          "position": [
            -43.69710159301758,
            0.1107809990644455,
            -69.32939910888672
          ],
          "quaternion": {
            "w": -0.015094709639118926,
            "x": 0.009797886461480842,
            "y": -0.9998359396585191,
            "z": 0.0020590241435006224
          },
          "standing_position": [
            -43.69710159301758,
            -1.1897674590700893,
            -69.32939910888672
          ],
          "visible_nodes": [
            152,
            153,
            154,
            156,
            157,
            158
          ]
        },
        {
          "accessible_nodes": [
            153,
            154,
            155,
            157,
            158,
            159
          ],
          "floor_index": 0,
          "index": 156,
          "offset_point_count": 0,
          "position": [
            -50.7671012878418,
            0.11957000195980072,
            -70.07740020751953
          ],
          "quaternion": {
            "w": 0.015080703543351531,
            "x": 0.009379509414503552,
            "y": -0.999825685924817,
            "z": 0.00576135268682924
          },
          "standing_position": [
            -50.7671012878418,
            -1.1729061571043842,
            -70.07740020751953
          ],
          "visible_nodes": [
            153,
            154,
            155,
            157,
            158,
            159
          ]
        },
        {
          "accessible_nodes": [
            153,
            154,
            155,
            156,
            158,
            159,
            160,
            161
          ],
          "floor_index": 0,
          "index": 157,
          "offset_point_count": 0,
          "position": [
            -57.679100036621094,
            0.12763799726963043,
            -70.2073974609375
          ],
          "quaternion": {
            "w": -0.021390582207058213,
            "x": 0.008903886622173573,
            "y": -0.9997263250774351,
            "z": 0.003231333612884019
          },
          "standing_position": [
            -57.679100036621094,
            -1.1604860831731711,
            -70.2073974609375
          ],
          "visible_nodes": [
            153,
            154,
            155,
            156,
            158,
            159,
            160,
            161
          ]
        },
        {
          "accessible_nodes": [
            69,
            154,
            155,
            156,
            157,
            159,
            160,
            161
          ],
          "floor_index": 0,
          "index": 158,
          "offset_point_count": 0,
          "position": [
            -65.93219757080078,
            0.1371529996395111,
            -70.22689819335938
          ],
          "quaternion": {
            "w": 0.022896916079224797,
            "x": 0.008621287916996125,
            "y": -0.9996968346243723,
            "z": 0.0027638532390999453
          },
          "standing_position": [
            -65.93219757080078,
            -1.1462557431259528,
            -70.22689819335938
          ],
          "visible_nodes": [
            69,
            154,
            155,
            156,
            157,
            159,
            160,
            161
          ]
        },
        {
          "accessible_nodes": [
            28,
            69,
            156,
            157,
            158,
            160,
            161
          ],
          "floor_index": 0,
          "index": 159,
          "offset_point_count": 0,
          "position": [
            -74.3384017944336,
            0.1467220038175583,
            -70.10669708251953
          ],
          "quaternion": {
            "w": 0.0624362741821974,
            "x": 0.016932902157581482,
            "y": -0.9979049521988407,
            "z": 0.0008310719337241986
          },
          "standing_position": [
            -74.3384017944336,
            -1.130511340100365,
            -70.10669708251953
          ],
          "visible_nodes": [
            28,
            69,
            156,
            157,
            158,
            160,
            161
          ]
        },
        {
          "accessible_nodes": [
            28,
            69,
            157,
            158,
            159,
            161
          ],
          "floor_index": 0,
          "index": 160,
          "offset_point_count": 0,
          "position": [
            -82.07430267333984,
            0.15549300611019135,
            -69.95690155029297
          ],
          "quaternion": {
            "w": 0.0030207220279007095,
            "x": 0.010101584755785252,
            "y": -0.9999444022220292,
            "z": -0.0001910185792827782
          },
          "standing_position": [
            -82.07430267333984,
            -1.1303500580625727,
            -69.95690155029297
          ],
          "visible_nodes": [
            28,
            69,
            157,
            158,
            159,
            161
          ]
        },
        {
          "accessible_nodes": [
            28,
            69,
            157,
            158,
            159,
            160,
            166
          ],
          "floor_index": 0,
          "index": 161,
          "offset_point_count": 0,
          "position": [
            -86.71209716796875,
            0.16094699501991272,
            -70.08989715576172
          ],
          "quaternion": {
            "w": 0.030595295423806627,
            "x": 0.009443006220024622,
            "y": -0.9994278999818422,
            "z": 0.010892111240091915
          },
          "standing_position": [
            -86.71209716796875,
            -1.1311146291032779,
            -70.08989715576172
          ],
          "visible_nodes": [
            28,
            69,
            157,
            158,
            159,
            160,
            166
          ]
        },
        {
          "accessible_nodes": [
            150
          ],
          "floor_index": 0,
          "index": 162,
          "offset_point_count": 0,
          "position": [
            77.1760025024414,
            -0.0789375975728035,
            -11.319899559020996
          ],
          "quaternion": {
            "w": 0.02146185315036111,
            "x": 0.008956880871551987,
            "y": -0.9997285534083893,
            "z": 0.0014096221802726247
          },
          "standing_position": [
            77.1760025024414,
            -1.3536852814389846,
            -11.319899559020996
          ],
          "visible_nodes": [
            150
          ]
        },
        {
          "accessible_nodes": [
            100,
            111,
            112,
            121,
            139,
            164,
            165
          ],
          "floor_index": 0,
          "index": 163,
          "offset_point_count": 0,
          "position": [
            -13.594400405883789,
            0.01311460044234991,
            2.8994600772857666
          ],
          "quaternion": {
            "w": -0.03134574968669949,
            "x": 0.007452219512493537,
            "y": -0.999480455260898,
            "z": -0.0008473572825268761
          },
          "standing_position": [
            -13.594400405883789,
            -1.256392529464984,
            2.8994600772857666
          ],
          "visible_nodes": [
            100,
            111,
            112,
            121,
            139,
            164,
            165
          ]
        },
        {
          "accessible_nodes": [
            111,
            112,
            121,
            139,
            163,
            165
          ],
          "floor_index": 0,
          "index": 164,
          "offset_point_count": 0,
          "position": [
            -13.684900283813477,
            0.008912320248782635,
            7.834819793701172
          ],
          "quaternion": {
            "w": -0.03424015484604726,
            "x": 0.011009119306725866,
            "y": -0.9993378413904348,
            "z": 0.005502792928740309
          },
          "standing_position": [
            -13.684900283813477,
            -1.2649521660983007,
            7.834819793701172
          ],
          "visible_nodes": [
            111,
            112,
            121,
            139,
            163,
            165
          ]
        },
        {
          "accessible_nodes": [
            111,
            121,
            139,
            163,
            164
          ],
          "floor_index": 0,
          "index": 165,
          "offset_point_count": 0,
          "position": [
            -14.592399597167969,
            0.0069512901827692986,
            11.279199600219727
          ],
          "quaternion": {
            "w": -0.045910672018884914,
            "x": 0.007388424166349272,
            "y": -0.9989175898915051,
            "z": 0.0011241544794210493
          },
          "standing_position": [
            -14.592399597167969,
            -1.2578445820101678,
            11.279199600219727
          ],
          "visible_nodes": [
            111,
            121,
            139,
            163,
            164
          ]
        },
        {
          "accessible_nodes": [
            161
          ],
          "floor_index": 0,
          "index": 166,
          "offset_point_count": 0,
          "position": [
            -86.90550231933594,
            0.16688799858093262,
            -76.643798828125
          ],
          "quaternion": {
            "w": 0.0030247859926665907,
            "x": 0.004392336202579125,
            "y": -0.9999830721376074,
            "z": 0.0023297863980346546
          },
          "standing_position": [
            -86.90550231933594,
            -1.0954647575663008,
            -76.643798828125
          ],
          "visible_nodes": [
            161
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            3,
            4,
            67,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            168,
            169,
            170,
            171,
            172,
            173
          ],
          "floor_index": 0,
          "index": 167,
          "offset_point_count": 0,
          "position": [
            0.36111798882484436,
            -0.020275499671697617,
            22.760499954223633
          ],
          "quaternion": {
            "w": 0.0030220812007134583,
            "x": -0.00900526225024627,
            "y": -0.9998819758384934,
            "z": -0.012074602473457012
          },
          "standing_position": [
            0.36111798882484436,
            -1.246595121654118,
            22.760499954223633
          ],
          "visible_nodes": [
            0,
            1,
            2,
            3,
            4,
            67,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            168,
            169,
            170,
            171,
            172,
            173
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            67,
            95,
            96,
            97,
            98,
            99,
            167,
            169,
            170
          ],
          "floor_index": 0,
          "index": 168,
          "offset_point_count": 0,
          "position": [
            2.714050054550171,
            -0.01769779995083809,
            16.703100204467773
          ],
          "quaternion": {
            "w": 0.031300793801166744,
            "x": -0.00801576212209609,
            "y": -0.9994382919824613,
            "z": 0.008893948702017868
          },
          "standing_position": [
            2.714050054550171,
            -1.2847567533846591,
            16.703100204467773
          ],
          "visible_nodes": [
            0,
            1,
            67,
            95,
            96,
            97,
            98,
            99,
            167,
            169,
            170
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            3,
            67,
            95,
            96,
            167,
            168,
            170,
            171,
            172,
            173,
            174,
            175
          ],
          "floor_index": 0,
          "index": 169,
          "offset_point_count": 0,
          "position": [
            6.451539993286133,
            -0.023615499958395958,
            18.55579948425293
          ],
          "quaternion": {
            "w": -0.057926573522035986,
            "x": 0.007599417525058214,
            "y": -0.9982642144280975,
            "z": 0.007438412267172705
          },
          "standing_position": [
            6.451539993286133,
            -1.2376561796217558,
            18.55579948425293
          ],
          "visible_nodes": [
            0,
            1,
            2,
            3,
            67,
            95,
            96,
            167,
            168,
            170,
            171,
            172,
            173,
            174,
            175
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            67,
            95,
            167,
            168,
            169,
            171,
            172,
            173,
            174,
            175,
            176
          ],
          "floor_index": 0,
          "index": 170,
          "offset_point_count": 0,
          "position": [
            7.933990001678467,
            1.164430022239685,
            16.158100128173828
          ],
          "quaternion": {
            "w": -0.6668151170483988,
            "x": 0.02051045602344654,
            "y": -0.7449297925551335,
            "z": 0.004063770232456685
          },
          "standing_position": [
            7.933990001678467,
            0.02275954542811287,
            16.158100128173828
          ],
          "visible_nodes": [
            0,
            1,
            2,
            67,
            95,
            167,
            168,
            169,
            171,
            172,
            173,
            174,
            175,
            176
          ]
        },
        {
          "accessible_nodes": [
            0,
            1,
            2,
            95,
            167,
            169,
            170,
            172,
            173,
            174,
            175,
            176
          ],
          "floor_index": 0,
          "index": 171,
          "offset_point_count": 0,
          "position": [
            8.634590148925781,
            2.399630069732666,
            13.782299995422363
          ],
          "quaternion": {
            "w": -0.6871666141842544,
            "x": 0.016496472608748158,
            "y": -0.7262914489120517,
            "z": 0.005535202589362188
          },
          "standing_position": [
            8.634590148925781,
            1.161578232786552,
            13.782299995422363
          ],
          "visible_nodes": [
            0,
            1,
            2,
            95,
            167,
            169,
            170,
            172,
            173,
            174,
            175,
            176
          ]
        },
        {
          "accessible_nodes": [
            0,
            95,
            167,
            169,
            170,
            171,
            173,
            174,
            175,
            176
          ],
          "floor_index": 0,
          "index": 172,
          "offset_point_count": 0,
          "position": [
            8.336609840393066,
            2.941970109939575,
            11.325900077819824
          ],
          "quaternion": {
            "w": -0.39267483206751685,
            "x": 0.019408229350995263,
            "y": -0.9194214871217751,
            "z": -0.009691988911553675
          },
          "standing_position": [
            8.336609840393066,
            1.6615020382982963,
            11.325900077819824
          ],
          "visible_nodes": [
            0,
            95,
            167,
            169,
            170,
            171,
            173,
            174,
            175,
            176
          ]
        },
        {
          "accessible_nodes": [
            0,
            95,
            167,
            169,
            170,
            171,
            172,
            174,
            175,
            176
          ],
          "floor_index": 0,
          "index": 173,
          "offset_point_count": 0,
          "position": [
            8.362199783325195,
            4.6876702308654785,
            8.11240005493164
          ],
          "quaternion": {
            "w": -0.396775386035616,
            "x": 0.00888413933927073,
            "y": -0.9178659827963378,
            "z": 0.0035225305388064195
          },
          "standing_position": [
            8.362199783325195,
            3.4113502815118384,
            8.11240005493164
          ],
          "visible_nodes": [
            0,
            95,
            167,
            169,
            170,
            171,
            172,
            174,
            175,
            176
          ]
        },
        {
          "accessible_nodes": [
            95,
            169,
            170,
            171,
            172,
            173,
            175,
            176
          ],
          "floor_index": 0,
          "index": 174,
          "offset_point_count": 0,
          "position": [
            8.296560287475586,
            5.030399799346924,
            4.30495023727417
          ],
          "quaternion": {
            "w": -0.39307615951557234,
            "x": 0.00809034201908807,
            "y": -0.9194578632508483,
            "z": 0.00478759737683037
          },
          "standing_position": [
            8.296560287475586,
            3.785747718959059,
            4.30495023727417
          ],
          "visible_nodes": [
            95,
            169,
            170,
            171,
            172,
            173,
            175,
            176
          ]
        },
        {
          "accessible_nodes": [
            95,
            169,
            170,
            171,
            172,
            173,
            174,
            176,
            194,
            195,
            196,
            197,
            242
          ],
          "floor_index": 0,
          "index": 175,
          "offset_point_count": 0,
          "position": [
            8.460539817810059,
            6.559850215911865,
            1.2792400121688843
          ],
          "quaternion": {
            "w": -0.4139312998563804,
            "x": 0.0021269794215179674,
            "y": -0.9102983977682015,
            "z": 0.0036293078223349298
          },
          "standing_position": [
            8.460539817810059,
            5.3099823203881815,
            1.2792400121688843
          ],
          "visible_nodes": [
            95,
            169,
            170,
            171,
            172,
            173,
            174,
            176,
            194,
            195,
            196,
            197,
            242
          ]
        },
        {
          "accessible_nodes": [
            95,
            170,
            171,
            172,
            173,
            174,
            175,
            177,
            194,
            195,
            196,
            197,
            242
          ],
          "floor_index": 1,
          "index": 176,
          "offset_point_count": 0,
          "position": [
            8.595399856567383,
            5.939670085906982,
            -0.5381879806518555
          ],
          "quaternion": {
            "w": -0.02868586573689736,
            "x": 0.007361549140731072,
            "y": -0.9995516800264703,
            "z": 0.004401346640505558
          },
          "standing_position": [
            8.595399856567383,
            4.647364946463604,
            -0.5381879806518555
          ],
          "visible_nodes": [
            95,
            170,
            171,
            172,
            173,
            174,
            175,
            177,
            194,
            195,
            196,
            197,
            242
          ]
        },
        {
          "accessible_nodes": [
            176,
            178,
            179,
            180,
            181,
            194,
            195,
            196,
            197
          ],
          "floor_index": 1,
          "index": 177,
          "offset_point_count": 0,
          "position": [
            14.149200439453125,
            5.893970012664795,
            -0.08541429787874222
          ],
          "quaternion": {
            "w": 0.038798138646318155,
            "x": 0.011539306712817152,
            "y": -0.9991740078784983,
            "z": 0.0035856282123015197
          },
          "standing_position": [
            14.149200439453125,
            4.580031439622137,
            -0.08541429787874222
          ],
          "visible_nodes": [
            176,
            178,
            179,
            180,
            181,
            194,
            195,
            196,
            197
          ]
        },
        {
          "accessible_nodes": [
            177,
            179,
            180,
            181,
            182
          ],
          "floor_index": 1,
          "index": 178,
          "offset_point_count": 0,
          "position": [
            16.972299575805664,
            5.895430088043213,
            6.188029766082764
          ],
          "quaternion": {
            "w": -0.01879286488901707,
            "x": 0.011497947647605372,
            "y": -0.9997541453215236,
            "z": 0.0025049809143052656
          },
          "standing_position": [
            16.972299575805664,
            4.590593704669186,
            6.188029766082764
          ],
          "visible_nodes": [
            177,
            179,
            180,
            181,
            182
          ]
        },
        {
          "accessible_nodes": [
            177,
            178,
            180
          ],
          "floor_index": 1,
          "index": 179,
          "offset_point_count": 0,
          "position": [
            16.161699295043945,
            5.8909101486206055,
            13.043800354003906
          ],
          "quaternion": {
            "w": 0.015146928319232564,
            "x": 0.007554938746206782,
            "y": -0.9998360514355599,
            "z": 0.006430877914331579
          },
          "standing_position": [
            16.161699295043945,
            4.606827651702688,
            13.043800354003906
          ],
          "visible_nodes": [
            177,
            178,
            180
          ]
        },
        {
          "accessible_nodes": [
            177,
            178,
            179,
            181,
            182
          ],
          "floor_index": 1,
          "index": 180,
          "offset_point_count": 0,
          "position": [
            22.476299285888672,
            5.892580032348633,
            10.956899642944336
          ],
          "quaternion": {
            "w": -0.0994227153135521,
            "x": 0.0148355407453853,
            "y": -0.9949290703287532,
            "z": 0.003342711719063143
          },
          "standing_position": [
            22.476299285888672,
            4.603492405004744,
            10.956899642944336
          ],
          "visible_nodes": [
            177,
            178,
            179,
            181,
            182
          ]
        },
        {
          "accessible_nodes": [
            177,
            178,
            180,
            182,
            183,
            184,
            185
          ],
          "floor_index": 1,
          "index": 181,
          "offset_point_count": 0,
          "position": [
            28.92329978942871,
            5.878739833831787,
            13.510600090026855
          ],
          "quaternion": {
            "w": -0.005686312299783956,
            "x": 0.011575465639962548,
            "y": -0.9999108870855049,
            "z": 0.0034476986765007026
          },
          "standing_position": [
            28.92329978942871,
            4.507575830533281,
            13.510600090026855
          ],
          "visible_nodes": [
            177,
            178,
            180,
            182,
            183,
            184,
            185
          ]
        },
        {
          "accessible_nodes": [
            178,
            180,
            181,
            183,
            184,
            185,
            186
          ],
          "floor_index": 1,
          "index": 182,
          "offset_point_count": 0,
          "position": [
            36.22819900512695,
            5.8645100593566895,
            15.239399909973145
          ],
          "quaternion": {
            "w": -0.05425133949710884,
            "x": 0.008597682535200055,
            "y": -0.9984875656016541,
            "z": 0.0023367626765985194
          },
          "standing_position": [
            36.22819900512695,
            4.5726609890529355,
            15.239399909973145
          ],
          "visible_nodes": [
            178,
            180,
            181,
            183,
            184,
            185,
            186
          ]
        },
        {
          "accessible_nodes": [
            181,
            182,
            184,
            185,
            186,
            187
          ],
          "floor_index": 1,
          "index": 183,
          "offset_point_count": 0,
          "position": [
            44.64670181274414,
            5.861889839172363,
            15.719200134277344
          ],
          "quaternion": {
            "w": -0.10900984754409114,
            "x": 0.005555460362535546,
            "y": -0.9939905514263233,
            "z": 0.008293082156228728
          },
          "standing_position": [
            44.64670181274414,
            4.544706419528208,
            15.719200134277344
          ],
          "visible_nodes": [
            181,
            182,
            184,
            185,
            186,
            187
          ]
        },
        {
          "accessible_nodes": [
            181,
            182,
            183,
            185,
            186,
            187
          ],
          "floor_index": 1,
          "index": 184,
          "offset_point_count": 0,
          "position": [
            52.8468017578125,
            5.8443098068237305,
            15.857199668884277
          ],
          "quaternion": {
            "w": -0.06281612457506043,
            "x": 0.009658199893920371,
            "y": -0.9979608651741568,
            "z": 0.005912408926568706
          },
          "standing_position": [
            52.8468017578125,
            4.544305134977597,
            15.857199668884277
          ],
          "visible_nodes": [
            181,
            182,
            183,
            185,
            186,
            187
          ]
        },
        {
          "accessible_nodes": [
            181,
            182,
            183,
            184,
            186,
            187
          ],
          "floor_index": 1,
          "index": 185,
          "offset_point_count": 0,
          "position": [
            58.36140060424805,
            5.850160121917725,
            15.983200073242188
          ],
          "quaternion": {
            "w": -0.06508341992993355,
            "x": 0.011795244375153285,
            "y": -0.9978008601593643,
            "z": 0.004295985117411267
          },
          "standing_position": [
            58.36140060424805,
            4.55234331788314,
            15.983200073242188
          ],
          "visible_nodes": [
            181,
            182,
            183,
            184,
            186,
            187
          ]
        },
        {
          "accessible_nodes": [
            182,
            183,
            184,
            185,
            187
          ],
          "floor_index": 1,
          "index": 186,
          "offset_point_count": 0,
          "position": [
            63.59489822387695,
            5.835559844970703,
            16.256999969482422
          ],
          "quaternion": {
            "w": -0.07971720634168124,
            "x": 0.010575786318415827,
            "y": -0.9967391522441306,
            "z": 0.006661701876843873
          },
          "standing_position": [
            63.59489822387695,
            4.52546384742583,
            16.256999969482422
          ],
          "visible_nodes": [
            182,
            183,
            184,
            185,
            187
          ]
        },
        {
          "accessible_nodes": [
            183,
            184,
            185,
            186,
            188,
            189,
            190,
            192
          ],
          "floor_index": 1,
          "index": 187,
          "offset_point_count": 0,
          "position": [
            70.64820098876953,
            5.832849979400635,
            16.170900344848633
          ],
          "quaternion": {
            "w": -0.10664470681051977,
            "x": 0.010410356768426316,
            "y": -0.9942293558449808,
            "z": 0.0051489981164670184
          },
          "standing_position": [
            70.64820098876953,
            4.532522309739834,
            16.170900344848633
          ],
          "visible_nodes": [
            183,
            184,
            185,
            186,
            188,
            189,
            190,
            192
          ]
        },
        {
          "accessible_nodes": [
            187,
            189,
            190
          ],
          "floor_index": 1,
          "index": 188,
          "offset_point_count": 0,
          "position": [
            71.33719635009766,
            5.821040153503418,
            9.937479972839355
          ],
          "quaternion": {
            "w": -0.023328705522917215,
            "x": 0.008347350238417029,
            "y": -0.9996820704392294,
            "z": 0.0046748906722052525
          },
          "standing_position": [
            71.33719635009766,
            4.5470019288432555,
            9.937479972839355
          ],
          "visible_nodes": [
            187,
            189,
            190
          ]
        },
        {
          "accessible_nodes": [
            187,
            188,
            190
          ],
          "floor_index": 1,
          "index": 189,
          "offset_point_count": 0,
          "position": [
            71.80599975585938,
            5.816470146179199,
            6.0179901123046875
          ],
          "quaternion": {
            "w": -0.01142902552616127,
            "x": 0.007610805420812882,
            "y": -0.9999038679884567,
            "z": 0.0019230024718345006
          },
          "standing_position": [
            71.80599975585938,
            4.542452731888851,
            6.0179901123046875
          ],
          "visible_nodes": [
            187,
            188,
            190
          ]
        },
        {
          "accessible_nodes": [
            187,
            188,
            189,
            191
          ],
          "floor_index": 1,
          "index": 190,
          "offset_point_count": 0,
          "position": [
            72.07039642333984,
            5.808159828186035,
            -0.9542340040206909
          ],
          "quaternion": {
            "w": -0.05630789523857541,
            "x": 0.010180654799176682,
            "y": -0.9983592804191456,
            "z": 0.002126716222250821
          },
          "standing_position": [
            72.07039642333984,
            4.516957365625076,
            -0.9542340040206909
          ],
          "visible_nodes": [
            187,
            188,
            189,
            191
          ]
        },
        {
          "accessible_nodes": [
            190,
            192
          ],
          "floor_index": 1,
          "index": 191,
          "offset_point_count": 0,
          "position": [
            75.43499755859375,
            5.7913498878479,
            -4.078629970550537
          ],
          "quaternion": {
            "w": -0.0222742321707597,
            "x": 0.007947365795463157,
            "y": -0.9997175756630431,
            "z": 0.002340100251442376
          },
          "standing_position": [
            75.43499755859375,
            4.5301392821938515,
            -4.078629970550537
          ],
          "visible_nodes": [
            190,
            192
          ]
        },
        {
          "accessible_nodes": [
            187,
            191,
            193
          ],
          "floor_index": 1,
          "index": 192,
          "offset_point_count": 0,
          "position": [
            79.79100036621094,
            5.792109966278076,
            -3.5797500610351562
          ],
          "quaternion": {
            "w": -0.04581939172687885,
            "x": 0.008527050542319895,
            "y": -0.9989092436229016,
            "z": 0.002863348370513384
          },
          "standing_position": [
            79.79100036621094,
            4.531533157382434,
            -3.5797500610351562
          ],
          "visible_nodes": [
            187,
            191,
            193
          ]
        },
        {
          "accessible_nodes": [
            192
          ],
          "floor_index": 1,
          "index": 193,
          "offset_point_count": 0,
          "position": [
            80.23829650878906,
            5.756770133972168,
            -10.201800346374512
          ],
          "quaternion": {
            "w": -0.07663190278628118,
            "x": 0.010026839140816268,
            "y": -0.9969968105502368,
            "z": 0.004937506729416384
          },
          "standing_position": [
            80.23829650878906,
            4.488004353438788,
            -10.201800346374512
          ],
          "visible_nodes": [
            192
          ]
        },
        {
          "accessible_nodes": [
            175,
            176,
            177,
            195,
            196,
            197,
            242
          ],
          "floor_index": 1,
          "index": 194,
          "offset_point_count": 0,
          "position": [
            3.045289993286133,
            5.948760032653809,
            0.05469889938831329
          ],
          "quaternion": {
            "w": 0.023327039418435766,
            "x": 0.005555859824810811,
            "y": -0.9997100335169512,
            "z": 0.002199184698300012
          },
          "standing_position": [
            3.045289993286133,
            4.633889438867312,
            0.05469889938831329
          ],
          "visible_nodes": [
            175,
            176,
            177,
            195,
            196,
            197,
            242
          ]
        },
        {
          "accessible_nodes": [
            175,
            176,
            177,
            194,
            196,
            197,
            242
          ],
          "floor_index": 1,
          "index": 195,
          "offset_point_count": 0,
          "position": [
            -3.1810801029205322,
            5.954599857330322,
            -0.07884469628334045
          ],
          "quaternion": {
            "w": -0.021721903555077023,
            "x": 0.011851919372622635,
            "y": -0.9996900003466949,
            "z": 0.002755256475461327
          },
          "standing_position": [
            -3.1810801029205322,
            4.634248358910507,
            -0.07884469628334045
          ],
          "visible_nodes": [
            175,
            176,
            177,
            194,
            196,
            197,
            242
          ]
        },
        {
          "accessible_nodes": [
            175,
            176,
            177,
            194,
            195,
            197,
            242,
            253,
            255
          ],
          "floor_index": 1,
          "index": 196,
          "offset_point_count": 0,
          "position": [
            -10.106200218200684,
            5.95904016494751,
            -0.021838199347257614
          ],
          "quaternion": {
            "w": 0.03892876407179442,
            "x": 0.01111030604220845,
            "y": -0.9991780717934277,
            "z": -0.0020696009186907094
          },
          "standing_position": [
            -10.106200218200684,
            4.594242335896157,
            -0.021838199347257614
          ],
          "visible_nodes": [
            175,
            176,
            177,
            194,
            195,
            197,
            242,
            253,
            255
          ]
        },
        {
          "accessible_nodes": [
            175,
            176,
            177,
            194,
            195,
            196,
            242,
            254,
            255
          ],
          "floor_index": 1,
          "index": 197,
          "offset_point_count": 0,
          "position": [
            -15.830300331115723,
            5.972959995269775,
            -0.03389419987797737
          ],
          "quaternion": {
            "w": 0.01583221802604351,
            "x": 0.011746751925430232,
            "y": -0.9997996636227391,
            "z": 0.0034613931353296365
          },
          "standing_position": [
            -15.830300331115723,
            4.633845311538582,
            -0.03389419987797737
          ],
          "visible_nodes": [
            175,
            176,
            177,
            194,
            195,
            196,
            242,
            254,
            255
          ]
        },
        {
          "accessible_nodes": [
            199,
            200,
            201,
            242,
            243,
            253
          ],
          "floor_index": 1,
          "index": 198,
          "offset_point_count": 0,
          "position": [
            -20.57830047607422,
            5.913959980010986,
            -6.096680164337158
          ],
          "quaternion": {
            "w": 0.003035835813376631,
            "x": 0.012512271334032576,
            "y": -0.9999166692345958,
            "z": 0.0009470638660518886
          },
          "standing_position": [
            -20.57830047607422,
            4.63792517272169,
            -6.096680164337158
          ],
          "visible_nodes": [
            199,
            200,
            201,
            242,
            243,
            253
          ]
        },
        {
          "accessible_nodes": [
            198,
            200,
            201,
            202,
            242,
            243,
            253
          ],
          "floor_index": 1,
          "index": 199,
          "offset_point_count": 0,
          "position": [
            -20.42620086669922,
            5.923059940338135,
            -12.393199920654297
          ],
          "quaternion": {
            "w": 0.00950563041989948,
            "x": 0.012011929238970435,
            "y": -0.9998807687012368,
            "z": 0.0019515871296385723
          },
          "standing_position": [
            -20.42620086669922,
            4.64561594925311,
            -12.393199920654297
          ],
          "visible_nodes": [
            198,
            200,
            201,
            202,
            242,
            243,
            253
          ]
        },
        {
          "accessible_nodes": [
            198,
            199,
            201,
            202,
            235,
            236,
            237,
            242,
            243,
            253
          ],
          "floor_index": 1,
          "index": 200,
          "offset_point_count": 0,
          "position": [
            -20.83989906311035,
            5.939899921417236,
            -24.440900802612305
          ],
          "quaternion": {
            "w": -0.011734775481960448,
            "x": 0.00958354248624476,
            "y": -0.999881014599685,
            "z": 0.0029025621061921207
          },
          "standing_position": [
            -20.83989906311035,
            4.640501504600469,
            -24.440900802612305
          ],
          "visible_nodes": [
            198,
            199,
            201,
            202,
            235,
            236,
            237,
            242,
            243,
            253
          ]
        },
        {
          "accessible_nodes": [
            198,
            199,
            200,
            202,
            235,
            236,
            237,
            238,
            243
          ],
          "floor_index": 1,
          "index": 201,
          "offset_point_count": 0,
          "position": [
            -20.86280059814453,
            5.936679840087891,
            -30.231399536132812
          ],
          "quaternion": {
            "w": -0.03743189710365526,
            "x": 0.010476132059373483,
            "y": -0.999238074132966,
            "z": 0.003519390830500643
          },
          "standing_position": [
            -20.86280059814453,
            4.650102630688308,
            -30.231399536132812
          ],
          "visible_nodes": [
            198,
            199,
            200,
            202,
            235,
            236,
            237,
            238,
            243
          ]
        },
        {
          "accessible_nodes": [
            199,
            200,
            201,
            235,
            236,
            237,
            238,
            239,
            240,
            243
          ],
          "floor_index": 1,
          "index": 202,
          "offset_point_count": 0,
          "position": [
            -20.86829948425293,
            5.942470073699951,
            -36.981300354003906
          ],
          "quaternion": {
            "w": 0.04710569408951672,
            "x": 0.013237234893033474,
            "y": -0.9988003031317327,
            "z": -0.0019470178682310182
          },
          "standing_position": [
            -20.86829948425293,
            4.654061576747435,
            -36.981300354003906
          ],
          "visible_nodes": [
            199,
            200,
            201,
            235,
            236,
            237,
            238,
            239,
            240,
            243
          ]
        },
        {
          "accessible_nodes": [
            238,
            241
          ],
          "floor_index": 1,
          "index": 203,
          "offset_point_count": 0,
          "position": [
            -31.166099548339844,
            5.966209888458252,
            -56.77330017089844
          ],
          "quaternion": {
            "w": 0.010025686036373764,
            "x": 0.010598501906095086,
            "y": -0.9998888609638737,
            "z": 0.003068694566874811
          },
          "standing_position": [
            -31.166099548339844,
            4.681143424889696,
            -56.77330017089844
          ],
          "visible_nodes": [
            238,
            241
          ]
        },
        {
          "accessible_nodes": [
            205,
            206,
            235,
            236,
            237,
            238,
            239,
            240
          ],
          "floor_index": 1,
          "index": 204,
          "offset_point_count": 0,
          "position": [
            -20.675399780273438,
            5.95274019241333,
            -71.30680084228516
          ],
          "quaternion": {
            "w": 0.0034673544159291953,
            "x": 0.010390558591703437,
            "y": -0.9999368245315489,
            "z": 0.0025238402444305746
          },
          "standing_position": [
            -20.675399780273438,
            4.612449858048755,
            -71.30680084228516
          ],
          "visible_nodes": [
            205,
            206,
            235,
            236,
            237,
            238,
            239,
            240
          ]
        },
        {
          "accessible_nodes": [
            204,
            206,
            236,
            237,
            238,
            239,
            240
          ],
          "floor_index": 1,
          "index": 205,
          "offset_point_count": 0,
          "position": [
            -21.086700439453125,
            5.96019983291626,
            -76.83809661865234
          ],
          "quaternion": {
            "w": 0.06165236834871601,
            "x": 0.012597351169722182,
            "y": -0.9979217659906909,
            "z": -0.013872503590126737
          },
          "standing_position": [
            -21.086700439453125,
            4.6803757167689595,
            -76.83809661865234
          ],
          "visible_nodes": [
            204,
            206,
            236,
            237,
            238,
            239,
            240
          ]
        },
        {
          "accessible_nodes": [
            204,
            205,
            207,
            208,
            209,
            237,
            238,
            239,
            240
          ],
          "floor_index": 1,
          "index": 206,
          "offset_point_count": 0,
          "position": [
            -21.050199508666992,
            5.980329990386963,
            -82.61969757080078
          ],
          "quaternion": {
            "w": 0.0067365137255452545,
            "x": 0.01095577034717602,
            "y": -0.9999155590049541,
            "z": 0.001862394084899467
          },
          "standing_position": [
            -21.050199508666992,
            4.653412743444057,
            -82.61969757080078
          ],
          "visible_nodes": [
            204,
            205,
            207,
            208,
            209,
            237,
            238,
            239,
            240
          ]
        },
        {
          "accessible_nodes": [
            206,
            208,
            209
          ],
          "floor_index": 1,
          "index": 207,
          "offset_point_count": 0,
          "position": [
            -25.922500610351562,
            5.984429836273193,
            -82.3635025024414
          ],
          "quaternion": {
            "w": 0.03302404118741652,
            "x": 0.013019942564443818,
            "y": -0.9993650685688257,
            "z": 0.0030575519133882413
          },
          "standing_position": [
            -25.922500610351562,
            4.664366957111412,
            -82.3635025024414
          ],
          "visible_nodes": [
            206,
            208,
            209
          ]
        },
        {
          "accessible_nodes": [
            206,
            207,
            209,
            212
          ],
          "floor_index": 1,
          "index": 208,
          "offset_point_count": 0,
          "position": [
            -30.515300750732422,
            5.964890003204346,
            -82.53710174560547
          ],
          "quaternion": {
            "w": 0.023704476925244845,
            "x": 0.01594164510190931,
            "y": -0.999590991239855,
            "z": 0.0013404188353924752
          },
          "standing_position": [
            -30.515300750732422,
            4.671938959935269,
            -82.53710174560547
          ],
          "visible_nodes": [
            206,
            207,
            209,
            212
          ]
        },
        {
          "accessible_nodes": [
            206,
            207,
            208,
            210,
            211,
            212
          ],
          "floor_index": 1,
          "index": 209,
          "offset_point_count": 0,
          "position": [
            -37.61940002441406,
            5.980420112609863,
            -82.75129699707031
          ],
          "quaternion": {
            "w": -0.020234988478794784,
            "x": 0.010067319922291844,
            "y": -0.9997445391152638,
            "z": 0.00022509309441981953
          },
          "standing_position": [
            -37.61940002441406,
            4.630640890233016,
            -82.75129699707031
          ],
          "visible_nodes": [
            206,
            207,
            208,
            210,
            211,
            212
          ]
        },
        {
          "accessible_nodes": [
            209,
            211,
            212,
            213
          ],
          "floor_index": 1,
          "index": 210,
          "offset_point_count": 0,
          "position": [
            -42.5629997253418,
            5.971960067749023,
            -80.1427001953125
          ],
          "quaternion": {
            "w": 0.06533341944475018,
            "x": 0.008464364374432206,
            "y": -0.9978274796649084,
            "z": 0.00046571306492613633
          },
          "standing_position": [
            -42.5629997253418,
            4.662800547447833,
            -80.1427001953125
          ],
          "visible_nodes": [
            209,
            211,
            212,
            213
          ]
        },
        {
          "accessible_nodes": [
            209,
            210,
            212,
            213,
            214,
            215,
            218,
            219,
            220,
            221,
            222,
            223,
            244,
            270,
            274
          ],
          "floor_index": 1,
          "index": 211,
          "offset_point_count": 0,
          "position": [
            -49.765201568603516,
            5.962279796600342,
            -79.50460052490234
          ],
          "quaternion": {
            "w": 0.012663506242315747,
            "x": 0.010975267911925294,
            "y": -0.9998595466921822,
            "z": 0.00027042224366543503
          },
          "standing_position": [
            -49.765201568603516,
            4.660228391444474,
            -79.50460052490234
          ],
          "visible_nodes": [
            209,
            210,
            212,
            213,
            214,
            215,
            218,
            219,
            220,
            221,
            222,
            223,
            244,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            208,
            209,
            210,
            211,
            213,
            214,
            215,
            216,
            218,
            219,
            220,
            221,
            222,
            223,
            270
          ],
          "floor_index": 1,
          "index": 212,
          "offset_point_count": 0,
          "position": [
            -57.52330017089844,
            5.958690166473389,
            -79.51629638671875
          ],
          "quaternion": {
            "w": -0.0015574158644390012,
            "x": 0.008418979425278366,
            "y": -0.999961025253382,
            "z": 0.002154996207951467
          },
          "standing_position": [
            -57.52330017089844,
            4.666800057071157,
            -79.51629638671875
          ],
          "visible_nodes": [
            208,
            209,
            210,
            211,
            213,
            214,
            215,
            216,
            218,
            219,
            220,
            221,
            222,
            223,
            270
          ]
        },
        {
          "accessible_nodes": [
            210,
            211,
            212,
            214,
            215,
            216,
            217,
            218,
            219,
            221,
            223
          ],
          "floor_index": 1,
          "index": 213,
          "offset_point_count": 0,
          "position": [
            -64.9542007446289,
            5.949059963226318,
            -79.31839752197266
          ],
          "quaternion": {
            "w": 0.03148119197895233,
            "x": 0.014985449533330674,
            "y": -0.9993915718594076,
            "z": 0.0009204061640259707
          },
          "standing_position": [
            -64.9542007446289,
            4.6511200860028605,
            -79.31839752197266
          ],
          "visible_nodes": [
            210,
            211,
            212,
            214,
            215,
            216,
            217,
            218,
            219,
            221,
            223
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            213,
            215,
            216,
            220,
            221,
            222,
            274
          ],
          "floor_index": 1,
          "index": 214,
          "offset_point_count": 0,
          "position": [
            -72.82550048828125,
            5.947690010070801,
            -79.29209899902344
          ],
          "quaternion": {
            "w": 0.0674698557640508,
            "x": 0.011810009158035099,
            "y": -0.9976499481121626,
            "z": 0.0017089698077239147
          },
          "standing_position": [
            -72.82550048828125,
            4.655120816161947,
            -79.29209899902344
          ],
          "visible_nodes": [
            211,
            212,
            213,
            215,
            216,
            220,
            221,
            222,
            274
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            213,
            214,
            216
          ],
          "floor_index": 1,
          "index": 215,
          "offset_point_count": 0,
          "position": [
            -79.08719635009766,
            5.9461798667907715,
            -78.6541976928711
          ],
          "quaternion": {
            "w": 0.021543823418169666,
            "x": 0.013742273378510445,
            "y": -0.9996691991115273,
            "z": 0.0029133712539193093
          },
          "standing_position": [
            -79.08719635009766,
            4.640383833450842,
            -78.6541976928711
          ],
          "visible_nodes": [
            211,
            212,
            213,
            214,
            216
          ]
        },
        {
          "accessible_nodes": [
            212,
            213,
            214,
            215
          ],
          "floor_index": 1,
          "index": 216,
          "offset_point_count": 0,
          "position": [
            -84.677001953125,
            5.9377899169921875,
            -78.3948974609375
          ],
          "quaternion": {
            "w": 0.052486416124295124,
            "x": 0.013734869521929363,
            "y": -0.9985203898114496,
            "z": 0.003683149573364533
          },
          "standing_position": [
            -84.677001953125,
            4.6198699378264605,
            -78.3948974609375
          ],
          "visible_nodes": [
            212,
            213,
            214,
            215
          ]
        },
        {
          "accessible_nodes": [
            213,
            218,
            219,
            220,
            221,
            222,
            244,
            270,
            274
          ],
          "floor_index": 1,
          "index": 217,
          "offset_point_count": 0,
          "position": [
            -68.79080200195312,
            5.941410064697266,
            -73.13700103759766
          ],
          "quaternion": {
            "w": -0.022098398646680107,
            "x": 0.011127536892398902,
            "y": -0.9996870415445931,
            "z": 0.0036951242451782316
          },
          "standing_position": [
            -68.79080200195312,
            4.6842838236407225,
            -73.13700103759766
          ],
          "visible_nodes": [
            213,
            218,
            219,
            220,
            221,
            222,
            244,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            213,
            217,
            219,
            220,
            221,
            222,
            244,
            274
          ],
          "floor_index": 1,
          "index": 218,
          "offset_point_count": 0,
          "position": [
            -68.28579711914062,
            5.932419776916504,
            -65.28179931640625
          ],
          "quaternion": {
            "w": -0.010286204094656718,
            "x": 0.010080809176659534,
            "y": -0.9998951946412421,
            "z": 0.0014768976378691427
          },
          "standing_position": [
            -68.28579711914062,
            4.63260604163388,
            -65.28179931640625
          ],
          "visible_nodes": [
            211,
            212,
            213,
            217,
            219,
            220,
            221,
            222,
            244,
            274
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            213,
            217,
            218,
            220,
            221,
            222,
            223,
            224,
            225,
            244,
            268,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 219,
          "offset_point_count": 0,
          "position": [
            -61.900001525878906,
            5.941609859466553,
            -64.67310333251953
          ],
          "quaternion": {
            "w": -0.03696545884540541,
            "x": 0.010166827476171349,
            "y": -0.9992647970176263,
            "z": 0.00022337853735644996
          },
          "standing_position": [
            -61.900001525878906,
            4.635575507935248,
            -64.67310333251953
          ],
          "visible_nodes": [
            211,
            212,
            213,
            217,
            218,
            220,
            221,
            222,
            223,
            224,
            225,
            244,
            268,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            214,
            217,
            218,
            219,
            221,
            222,
            223,
            224,
            225,
            244,
            267,
            268,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 220,
          "offset_point_count": 0,
          "position": [
            -55.50579833984375,
            5.942749977111816,
            -64.56680297851562
          ],
          "quaternion": {
            "w": 0.008360008277618841,
            "x": 0.01100078732186915,
            "y": -0.9999035773878351,
            "z": 0.0013898343487716222
          },
          "standing_position": [
            -55.50579833984375,
            4.630499223334096,
            -64.56680297851562
          ],
          "visible_nodes": [
            211,
            212,
            214,
            217,
            218,
            219,
            221,
            222,
            223,
            224,
            225,
            244,
            267,
            268,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            213,
            214,
            217,
            218,
            219,
            220,
            222,
            223,
            224,
            244,
            268,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 221,
          "offset_point_count": 0,
          "position": [
            -55.02519989013672,
            5.946410179138184,
            -70.87010192871094
          ],
          "quaternion": {
            "w": 0.011201221072968408,
            "x": 0.011796326136041885,
            "y": -0.9998619759196992,
            "z": 0.0033791390442609102
          },
          "standing_position": [
            -55.02519989013672,
            4.6624451121128425,
            -70.87010192871094
          ],
          "visible_nodes": [
            211,
            212,
            213,
            214,
            217,
            218,
            219,
            220,
            222,
            223,
            224,
            244,
            268,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            214,
            217,
            218,
            219,
            220,
            221,
            223,
            224,
            244,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 222,
          "offset_point_count": 0,
          "position": [
            -60.20349884033203,
            5.944789886474609,
            -70.8594970703125
          ],
          "quaternion": {
            "w": 0.008999469216943959,
            "x": 0.01247590666600383,
            "y": -0.999875351468566,
            "z": 0.0035551383122111855
          },
          "standing_position": [
            -60.20349884033203,
            4.636508432367375,
            -70.8594970703125
          ],
          "visible_nodes": [
            211,
            212,
            214,
            217,
            218,
            219,
            220,
            221,
            223,
            224,
            244,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            213,
            219,
            220,
            221,
            222,
            224,
            225,
            226,
            244,
            266,
            267,
            268,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 223,
          "offset_point_count": 0,
          "position": [
            -62.215599060058594,
            5.92609977722168,
            -55.905799865722656
          ],
          "quaternion": {
            "w": -0.018056242346123096,
            "x": 0.012046570331199869,
            "y": -0.9997599209247665,
            "z": 0.0029918281289409714
          },
          "standing_position": [
            -62.215599060058594,
            4.624717865175848,
            -55.905799865722656
          ],
          "visible_nodes": [
            211,
            212,
            213,
            219,
            220,
            221,
            222,
            224,
            225,
            226,
            244,
            266,
            267,
            268,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            219,
            220,
            221,
            222,
            223,
            225,
            226,
            227,
            228,
            244,
            265,
            266,
            267,
            268,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 224,
          "offset_point_count": 0,
          "position": [
            -61.87189865112305,
            5.924300193786621,
            -48.05400085449219
          ],
          "quaternion": {
            "w": 0.014170351436131535,
            "x": 0.011144658710577566,
            "y": -0.9998312226560032,
            "z": 0.0035388321325306267
          },
          "standing_position": [
            -61.87189865112305,
            4.608247080011432,
            -48.05400085449219
          ],
          "visible_nodes": [
            219,
            220,
            221,
            222,
            223,
            225,
            226,
            227,
            228,
            244,
            265,
            266,
            267,
            268,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            219,
            220,
            223,
            224,
            226,
            227,
            228,
            229,
            259,
            265,
            266,
            267,
            268,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 225,
          "offset_point_count": 0,
          "position": [
            -62.559600830078125,
            5.901909828186035,
            -37.741798400878906
          ],
          "quaternion": {
            "w": 0.010776119956075683,
            "x": 0.012200167296195092,
            "y": -0.9998635184015927,
            "z": 0.002825970886955882
          },
          "standing_position": [
            -62.559600830078125,
            4.5815379459405765,
            -37.741798400878906
          ],
          "visible_nodes": [
            219,
            220,
            223,
            224,
            226,
            227,
            228,
            229,
            259,
            265,
            266,
            267,
            268,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            223,
            224,
            225,
            227,
            228,
            229,
            230,
            258,
            259,
            265,
            266,
            267,
            268,
            269,
            270
          ],
          "floor_index": 1,
          "index": 226,
          "offset_point_count": 0,
          "position": [
            -62.20439910888672,
            5.893539905548096,
            -31.77869987487793
          ],
          "quaternion": {
            "w": 0.012265297141781855,
            "x": 0.01218963395621503,
            "y": -0.9998495018482565,
            "z": 0.0013977980160079148
          },
          "standing_position": [
            -62.20439910888672,
            4.5874857604631165,
            -31.77869987487793
          ],
          "visible_nodes": [
            223,
            224,
            225,
            227,
            228,
            229,
            230,
            258,
            259,
            265,
            266,
            267,
            268,
            269,
            270
          ]
        },
        {
          "accessible_nodes": [
            224,
            225,
            226,
            228,
            229,
            230,
            231,
            256,
            257,
            258,
            259,
            260,
            265,
            266,
            267,
            268,
            269,
            271,
            272
          ],
          "floor_index": 1,
          "index": 227,
          "offset_point_count": 0,
          "position": [
            -61.69309997558594,
            5.890049934387207,
            -25.21139907836914
          ],
          "quaternion": {
            "w": 0.08329662467381982,
            "x": 0.012081161574180821,
            "y": -0.9964482891946478,
            "z": 0.0025554290614069855
          },
          "standing_position": [
            -61.69309997558594,
            4.596573660371148,
            -25.21139907836914
          ],
          "visible_nodes": [
            224,
            225,
            226,
            228,
            229,
            230,
            231,
            256,
            257,
            258,
            259,
            260,
            265,
            266,
            267,
            268,
            269,
            271,
            272
          ]
        },
        {
          "accessible_nodes": [
            224,
            225,
            226,
            227,
            229,
            230,
            231,
            245,
            246,
            247,
            248,
            256,
            257,
            258,
            259,
            260,
            261,
            263,
            265,
            266,
            267,
            268,
            271,
            272
          ],
          "floor_index": 1,
          "index": 228,
          "offset_point_count": 0,
          "position": [
            -60.449798583984375,
            5.8937201499938965,
            -18.869400024414062
          ],
          "quaternion": {
            "w": -0.006468191058518423,
            "x": 0.011258173763313848,
            "y": -0.9999087113197148,
            "z": 0.003739246071942899
          },
          "standing_position": [
            -60.449798583984375,
            4.559888771586953,
            -18.869400024414062
          ],
          "visible_nodes": [
            224,
            225,
            226,
            227,
            229,
            230,
            231,
            245,
            246,
            247,
            248,
            256,
            257,
            258,
            259,
            260,
            261,
            263,
            265,
            266,
            267,
            268,
            271,
            272
          ]
        },
        {
          "accessible_nodes": [
            225,
            226,
            227,
            228,
            230,
            231,
            245,
            246,
            247,
            248,
            256,
            257,
            258,
            259,
            260,
            261,
            263,
            265,
            266,
            267,
            271,
            272
          ],
          "floor_index": 1,
          "index": 229,
          "offset_point_count": 0,
          "position": [
            -61.37089920043945,
            5.89054012298584,
            -12.98490047454834
          ],
          "quaternion": {
            "w": 0.022940919523166795,
            "x": 0.011056382853069405,
            "y": -0.9996756832405803,
            "z": -0.000012789540617422674
          },
          "standing_position": [
            -61.37089920043945,
            4.558180192415497,
            -12.98490047454834
          ],
          "visible_nodes": [
            225,
            226,
            227,
            228,
            230,
            231,
            245,
            246,
            247,
            248,
            256,
            257,
            258,
            259,
            260,
            261,
            263,
            265,
            266,
            267,
            271,
            272
          ]
        },
        {
          "accessible_nodes": [
            226,
            227,
            228,
            229,
            231,
            245,
            246,
            247,
            256,
            257,
            258,
            259,
            265,
            266,
            271,
            272
          ],
          "floor_index": 1,
          "index": 230,
          "offset_point_count": 0,
          "position": [
            -61.84280014038086,
            5.889520168304443,
            -6.767549991607666
          ],
          "quaternion": {
            "w": 0.00877847284294552,
            "x": 0.012605378161109803,
            "y": -0.9998750832141907,
            "z": 0.003725366366418301
          },
          "standing_position": [
            -61.84280014038086,
            4.5588086414302404,
            -6.767549991607666
          ],
          "visible_nodes": [
            226,
            227,
            228,
            229,
            231,
            245,
            246,
            247,
            256,
            257,
            258,
            259,
            265,
            266,
            271,
            272
          ]
        },
        {
          "accessible_nodes": [
            227,
            228,
            229,
            230,
            232,
            233,
            234,
            245,
            246,
            247,
            248,
            256,
            257,
            258,
            259,
            265,
            271,
            272,
            273
          ],
          "floor_index": 1,
          "index": 231,
          "offset_point_count": 0,
          "position": [
            -62.542999267578125,
            5.883029937744141,
            0.2930999994277954
          ],
          "quaternion": {
            "w": -0.0038048500134743586,
            "x": 0.010317264261069251,
            "y": -0.9999379272865362,
            "z": 0.0017966516869685361
          },
          "standing_position": [
            -62.542999267578125,
            4.590671205684253,
            0.2930999994277954
          ],
          "visible_nodes": [
            227,
            228,
            229,
            230,
            232,
            233,
            234,
            245,
            246,
            247,
            248,
            256,
            257,
            258,
            259,
            265,
            271,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            231,
            233,
            234,
            245,
            247,
            256,
            257,
            271,
            272,
            273
          ],
          "floor_index": 1,
          "index": 232,
          "offset_point_count": 0,
          "position": [
            -69.98139953613281,
            5.872189998626709,
            -0.15607699751853943
          ],
          "quaternion": {
            "w": 0.007798591357378358,
            "x": 0.013412042813575964,
            "y": -0.9998757165924606,
            "z": 0.002800908429965498
          },
          "standing_position": [
            -69.98139953613281,
            4.559836922656889,
            -0.15607699751853943
          ],
          "visible_nodes": [
            231,
            233,
            234,
            245,
            247,
            256,
            257,
            271,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            231,
            232,
            234,
            246,
            256,
            257,
            258,
            271,
            272,
            273
          ],
          "floor_index": 1,
          "index": 233,
          "offset_point_count": 0,
          "position": [
            -68.85230255126953,
            5.877970218658447,
            2.112230062484741
          ],
          "quaternion": {
            "w": -0.028087936823933377,
            "x": 0.010529168843155207,
            "y": -0.9995449640198802,
            "z": 0.003173399246138848
          },
          "standing_position": [
            -68.85230255126953,
            4.55359392638789,
            2.112230062484741
          ],
          "visible_nodes": [
            231,
            232,
            234,
            246,
            256,
            257,
            258,
            271,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            231,
            232,
            233,
            245,
            246,
            247,
            248,
            249,
            258,
            272,
            273
          ],
          "floor_index": 1,
          "index": 234,
          "offset_point_count": 0,
          "position": [
            -69.18460083007812,
            5.635749816894531,
            5.056580066680908
          ],
          "quaternion": {
            "w": -0.0019115323597382592,
            "x": 0.011587446264918913,
            "y": -0.9999272871403746,
            "z": 0.0027375931266149793
          },
          "standing_position": [
            -69.18460083007812,
            4.419020541888204,
            5.056580066680908
          ],
          "visible_nodes": [
            231,
            232,
            233,
            245,
            246,
            247,
            248,
            249,
            258,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            200,
            201,
            202,
            204,
            236,
            237,
            238,
            239,
            240,
            243
          ],
          "floor_index": 1,
          "index": 235,
          "offset_point_count": 0,
          "position": [
            -21.14859962463379,
            5.932030200958252,
            -43.85240173339844
          ],
          "quaternion": {
            "w": 0.016437348778580076,
            "x": 0.01056664065038109,
            "y": -0.9998071976406798,
            "z": 0.0019314203225562286
          },
          "standing_position": [
            -21.14859962463379,
            4.648498183218418,
            -43.85240173339844
          ],
          "visible_nodes": [
            200,
            201,
            202,
            204,
            236,
            237,
            238,
            239,
            240,
            243
          ]
        },
        {
          "accessible_nodes": [
            200,
            201,
            202,
            204,
            205,
            235,
            237,
            238,
            239,
            240,
            243
          ],
          "floor_index": 1,
          "index": 236,
          "offset_point_count": 0,
          "position": [
            -21.11910057067871,
            5.936600208282471,
            -47.84080123901367
          ],
          "quaternion": {
            "w": -0.0326906100143718,
            "x": 0.008677171060873767,
            "y": -0.9994154279474768,
            "z": 0.004984158048072782
          },
          "standing_position": [
            -21.11910057067871,
            4.646109124449475,
            -47.84080123901367
          ],
          "visible_nodes": [
            200,
            201,
            202,
            204,
            205,
            235,
            237,
            238,
            239,
            240,
            243
          ]
        },
        {
          "accessible_nodes": [
            200,
            201,
            202,
            204,
            205,
            206,
            235,
            236,
            238,
            239,
            240
          ],
          "floor_index": 1,
          "index": 237,
          "offset_point_count": 0,
          "position": [
            -21.090099334716797,
            5.935659885406494,
            -53.0791015625
          ],
          "quaternion": {
            "w": -0.022041558147368003,
            "x": 0.009043079784643599,
            "y": -0.9997094745611719,
            "z": 0.0036546381300873528
          },
          "standing_position": [
            -21.090099334716797,
            4.640542074025299,
            -53.0791015625
          ],
          "visible_nodes": [
            200,
            201,
            202,
            204,
            205,
            206,
            235,
            236,
            238,
            239,
            240
          ]
        },
        {
          "accessible_nodes": [
            201,
            202,
            203,
            204,
            205,
            206,
            235,
            236,
            237,
            239,
            240,
            241
          ],
          "floor_index": 1,
          "index": 238,
          "offset_point_count": 0,
          "position": [
            -21.113500595092773,
            5.935840129852295,
            -56.74879837036133
          ],
          "quaternion": {
            "w": 0.036569489737243506,
            "x": 0.010946391704144312,
            "y": -0.9992654084145489,
            "z": 0.003391007144553788
          },
          "standing_position": [
            -21.113500595092773,
            4.655562848317021,
            -56.74879837036133
          ],
          "visible_nodes": [
            201,
            202,
            203,
            204,
            205,
            206,
            235,
            236,
            237,
            239,
            240,
            241
          ]
        },
        {
          "accessible_nodes": [
            202,
            204,
            205,
            206,
            235,
            236,
            237,
            238,
            240
          ],
          "floor_index": 1,
          "index": 239,
          "offset_point_count": 0,
          "position": [
            -20.972999572753906,
            5.94290018081665,
            -61.07830047607422
          ],
          "quaternion": {
            "w": -0.020321763666378646,
            "x": 0.011956056413852702,
            "y": -0.9997071269434855,
            "z": 0.0054535204254467645
          },
          "standing_position": [
            -20.972999572753906,
            4.623937071120338,
            -61.07830047607422
          ],
          "visible_nodes": [
            202,
            204,
            205,
            206,
            235,
            236,
            237,
            238,
            240
          ]
        },
        {
          "accessible_nodes": [
            202,
            204,
            205,
            206,
            235,
            236,
            237,
            238,
            239
          ],
          "floor_index": 1,
          "index": 240,
          "offset_point_count": 0,
          "position": [
            -21.033899307250977,
            5.943640232086182,
            -65.72540283203125
          ],
          "quaternion": {
            "w": 0.008945364787493337,
            "x": 0.012033826873002518,
            "y": -0.9998837790901992,
            "z": 0.0027560951994450842
          },
          "standing_position": [
            -21.033899307250977,
            4.629253665184647,
            -65.72540283203125
          ],
          "visible_nodes": [
            202,
            204,
            205,
            206,
            235,
            236,
            237,
            238,
            239
          ]
        },
        {
          "accessible_nodes": [
            203,
            238
          ],
          "floor_index": 1,
          "index": 241,
          "offset_point_count": 0,
          "position": [
            -25.010799407958984,
            5.955480098724365,
            -57.0181999206543
          ],
          "quaternion": {
            "w": 0.02413327626932681,
            "x": 0.01162152339735567,
            "y": -0.9996321493329374,
            "z": 0.004254104124176998
          },
          "standing_position": [
            -25.010799407958984,
            4.612822335345498,
            -57.0181999206543
          ],
          "visible_nodes": [
            203,
            238
          ]
        },
        {
          "accessible_nodes": [
            175,
            176,
            194,
            195,
            196,
            197,
            198,
            199,
            200,
            243,
            253
          ],
          "floor_index": 1,
          "index": 242,
          "offset_point_count": 0,
          "position": [
            -20.4778995513916,
            5.9016900062561035,
            0.5588970184326172
          ],
          "quaternion": {
            "w": 0.01349659726744679,
            "x": 0.011771714723907211,
            "y": -0.9998390843145,
            "z": 0.0010346191827859965
          },
          "standing_position": [
            -20.4778995513916,
            4.534643145126054,
            0.5588970184326172
          ],
          "visible_nodes": [
            175,
            176,
            194,
            195,
            196,
            197,
            198,
            199,
            200,
            243,
            253
          ]
        },
        {
          "accessible_nodes": [
            198,
            199,
            200,
            201,
            202,
            235,
            236,
            242,
            253,
            259,
            260,
            261,
            263,
            264
          ],
          "floor_index": 1,
          "index": 243,
          "offset_point_count": 0,
          "position": [
            -20.850099563598633,
            5.9357099533081055,
            -18.284000396728516
          ],
          "quaternion": {
            "w": 0.010083290158653464,
            "x": 0.010133625422335797,
            "y": -0.9998967966826896,
            "z": 0.0014243271061989118
          },
          "standing_position": [
            -20.850099563598633,
            4.635152562528029,
            -18.284000396728516
          ],
          "visible_nodes": [
            198,
            199,
            200,
            201,
            202,
            235,
            236,
            242,
            253,
            259,
            260,
            261,
            263,
            264
          ]
        },
        {
          "accessible_nodes": [
            211,
            217,
            218,
            219,
            220,
            221,
            222,
            223,
            224,
            267,
            268,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 244,
          "offset_point_count": 0,
          "position": [
            -48.773101806640625,
            5.9363298416137695,
            -64.68109893798828
          ],
          "quaternion": {
            "w": -0.029030130013102593,
            "x": 0.011262767313771797,
            "y": -0.9995150358725527,
            "z": 0.00032042530903535264
          },
          "standing_position": [
            -48.773101806640625,
            4.611995020060006,
            -64.68109893798828
          ],
          "visible_nodes": [
            211,
            217,
            218,
            219,
            220,
            221,
            222,
            223,
            224,
            267,
            268,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            228,
            229,
            230,
            231,
            232,
            234,
            246,
            247,
            248,
            249,
            250,
            256,
            258,
            259,
            272,
            273
          ],
          "floor_index": 1,
          "index": 245,
          "offset_point_count": 0,
          "position": [
            -63.018699645996094,
            5.642129898071289,
            4.89054012298584
          ],
          "quaternion": {
            "w": -0.05059109678162519,
            "x": 0.004814111054566796,
            "y": -0.9987038616747846,
            "z": 0.0028212138767683016
          },
          "standing_position": [
            -63.018699645996094,
            4.389082370715663,
            4.89054012298584
          ],
          "visible_nodes": [
            228,
            229,
            230,
            231,
            232,
            234,
            246,
            247,
            248,
            249,
            250,
            256,
            258,
            259,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            228,
            229,
            230,
            231,
            233,
            234,
            245,
            247,
            248,
            249,
            250,
            251,
            257,
            258,
            259,
            265,
            271,
            272
          ],
          "floor_index": 1,
          "index": 246,
          "offset_point_count": 0,
          "position": [
            -57.2781982421875,
            5.644420146942139,
            5.274720191955566
          ],
          "quaternion": {
            "w": -0.062444209909013115,
            "x": 0.0026963811430312304,
            "y": -0.998035050114942,
            "z": 0.00441427337910703
          },
          "standing_position": [
            -57.2781982421875,
            4.360941220817151,
            5.274720191955566
          ],
          "visible_nodes": [
            228,
            229,
            230,
            231,
            233,
            234,
            245,
            247,
            248,
            249,
            250,
            251,
            257,
            258,
            259,
            265,
            271,
            272
          ]
        },
        {
          "accessible_nodes": [
            228,
            229,
            230,
            231,
            232,
            234,
            245,
            246,
            248,
            249,
            250,
            251,
            252,
            256,
            257,
            258,
            259,
            265,
            271,
            273
          ],
          "floor_index": 1,
          "index": 247,
          "offset_point_count": 0,
          "position": [
            -51.64870071411133,
            5.632279872894287,
            5.2088799476623535
          ],
          "quaternion": {
            "w": 0.010773571010175188,
            "x": 0.011458488351499431,
            "y": -0.9998614468553133,
            "z": 0.00545150625729543
          },
          "standing_position": [
            -51.64870071411133,
            4.358843946009185,
            5.2088799476623535
          ],
          "visible_nodes": [
            228,
            229,
            230,
            231,
            232,
            234,
            245,
            246,
            248,
            249,
            250,
            251,
            252,
            256,
            257,
            258,
            259,
            265,
            271,
            273
          ]
        },
        {
          "accessible_nodes": [
            228,
            229,
            231,
            234,
            245,
            246,
            247,
            249,
            250,
            251,
            252,
            253,
            256,
            257,
            272,
            273
          ],
          "floor_index": 1,
          "index": 248,
          "offset_point_count": 0,
          "position": [
            -45.84130096435547,
            5.634699821472168,
            5.457039833068848
          ],
          "quaternion": {
            "w": -0.008975543735425277,
            "x": 0.012760337402870027,
            "y": -0.9998756718834194,
            "z": 0.002290312548399105
          },
          "standing_position": [
            -45.84130096435547,
            4.4309077497455975,
            5.457039833068848
          ],
          "visible_nodes": [
            228,
            229,
            231,
            234,
            245,
            246,
            247,
            249,
            250,
            251,
            252,
            253,
            256,
            257,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            234,
            245,
            246,
            247,
            248,
            250,
            251,
            252,
            253,
            254
          ],
          "floor_index": 1,
          "index": 249,
          "offset_point_count": 0,
          "position": [
            -39.94889831542969,
            5.632689952850342,
            5.4827399253845215
          ],
          "quaternion": {
            "w": -0.0374513850967596,
            "x": 0.012854142616396568,
            "y": -0.9992157647488688,
            "z": -0.00011470436110541844
          },
          "standing_position": [
            -39.94889831542969,
            4.386200883921791,
            5.4827399253845215
          ],
          "visible_nodes": [
            234,
            245,
            246,
            247,
            248,
            250,
            251,
            252,
            253,
            254
          ]
        },
        {
          "accessible_nodes": [
            245,
            246,
            247,
            248,
            249,
            251,
            252,
            253,
            254
          ],
          "floor_index": 1,
          "index": 250,
          "offset_point_count": 0,
          "position": [
            -35.52280044555664,
            5.640140056610107,
            5.436409950256348
          ],
          "quaternion": {
            "w": -0.006983767242633138,
            "x": 0.005778639400883613,
            "y": -0.9999546621893091,
            "z": 0.0029155043232887853
          },
          "standing_position": [
            -35.52280044555664,
            4.360052228238764,
            5.436409950256348
          ],
          "visible_nodes": [
            245,
            246,
            247,
            248,
            249,
            251,
            252,
            253,
            254
          ]
        },
        {
          "accessible_nodes": [
            246,
            247,
            248,
            249,
            250,
            252,
            253,
            254
          ],
          "floor_index": 1,
          "index": 251,
          "offset_point_count": 0,
          "position": [
            -29.46500015258789,
            5.6292901039123535,
            5.378499984741211
          ],
          "quaternion": {
            "w": -0.02714867131448457,
            "x": 0.007363791342243697,
            "y": -0.9996010088672982,
            "z": 0.002558462628949557
          },
          "standing_position": [
            -29.46500015258789,
            4.354472704119311,
            5.378499984741211
          ],
          "visible_nodes": [
            246,
            247,
            248,
            249,
            250,
            252,
            253,
            254
          ]
        },
        {
          "accessible_nodes": [
            247,
            248,
            249,
            250,
            251,
            253,
            254
          ],
          "floor_index": 1,
          "index": 252,
          "offset_point_count": 0,
          "position": [
            -23.9773006439209,
            5.622680187225342,
            5.32765007019043
          ],
          "quaternion": {
            "w": 0.0077561409284549986,
            "x": 0.006370887758688418,
            "y": -0.9999435155532482,
            "z": 0.0034965435642408064
          },
          "standing_position": [
            -23.9773006439209,
            4.392596792875655,
            5.32765007019043
          ],
          "visible_nodes": [
            247,
            248,
            249,
            250,
            251,
            253,
            254
          ]
        },
        {
          "accessible_nodes": [
            196,
            198,
            199,
            200,
            242,
            243,
            248,
            249,
            250,
            251,
            252,
            254
          ],
          "floor_index": 1,
          "index": 253,
          "offset_point_count": 0,
          "position": [
            -20.361900329589844,
            5.619729995727539,
            5.008689880371094
          ],
          "quaternion": {
            "w": 0.008922253847485271,
            "x": 0.006901436106847641,
            "y": -0.99993005150296,
            "z": 0.003557817978511804
          },
          "standing_position": [
            -20.361900329589844,
            4.42440176391377,
            5.008689880371094
          ],
          "visible_nodes": [
            196,
            198,
            199,
            200,
            242,
            243,
            248,
            249,
            250,
            251,
            252,
            254
          ]
        },
        {
          "accessible_nodes": [
            197,
            249,
            250,
            251,
            252,
            253,
            255
          ],
          "floor_index": 1,
          "index": 254,
          "offset_point_count": 0,
          "position": [
            -15.11709976196289,
            5.608389854431152,
            4.593570232391357
          ],
          "quaternion": {
            "w": -0.11354517303938132,
            "x": 0.010413912485391218,
            "y": -0.9934571770431965,
            "z": 0.006472047504523565
          },
          "standing_position": [
            -15.11709976196289,
            4.365531262551985,
            4.593570232391357
          ],
          "visible_nodes": [
            197,
            249,
            250,
            251,
            252,
            253,
            255
          ]
        },
        {
          "accessible_nodes": [
            196,
            197,
            254
          ],
          "floor_index": 1,
          "index": 255,
          "offset_point_count": 0,
          "position": [
            -10.054300308227539,
            5.611949920654297,
            5.974329948425293
          ],
          "quaternion": {
            "w": 0.0056113944775850015,
            "x": 0.009984260783745402,
            "y": -0.9999338292044315,
            "z": 0.0010856943102196385
          },
          "standing_position": [
            -10.054300308227539,
            4.35490721282909,
            5.974329948425293
          ],
          "visible_nodes": [
            196,
            197,
            254
          ]
        },
        {
          "accessible_nodes": [
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            245,
            247,
            248,
            257,
            258,
            259,
            265,
            271,
            272,
            273
          ],
          "floor_index": 1,
          "index": 256,
          "offset_point_count": 0,
          "position": [
            -48.03810119628906,
            5.908740043640137,
            1.0834399461746216
          ],
          "quaternion": {
            "w": -0.014183092621410924,
            "x": 0.012566669831847704,
            "y": -0.9998134647676402,
            "z": 0.0037354467671137197
          },
          "standing_position": [
            -48.03810119628906,
            4.598741738089014,
            1.0834399461746216
          ],
          "visible_nodes": [
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            245,
            247,
            248,
            257,
            258,
            259,
            265,
            271,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            246,
            247,
            248,
            256,
            258,
            259,
            265,
            266,
            271,
            272,
            273
          ],
          "floor_index": 1,
          "index": 257,
          "offset_point_count": 0,
          "position": [
            -49.233699798583984,
            5.894130229949951,
            -3.878159999847412
          ],
          "quaternion": {
            "w": 0.0009635343687765854,
            "x": 0.012975010640154447,
            "y": -0.9999144338716439,
            "z": 0.001355926054034709
          },
          "standing_position": [
            -49.233699798583984,
            4.5418676002427185,
            -3.878159999847412
          ],
          "visible_nodes": [
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            246,
            247,
            248,
            256,
            258,
            259,
            265,
            266,
            271,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            226,
            227,
            228,
            229,
            230,
            231,
            233,
            234,
            245,
            246,
            247,
            256,
            257,
            259,
            265,
            266,
            267,
            271,
            272,
            273
          ],
          "floor_index": 1,
          "index": 258,
          "offset_point_count": 0,
          "position": [
            -48.132301330566406,
            5.903450012207031,
            -10.561200141906738
          ],
          "quaternion": {
            "w": -0.04424962556316277,
            "x": 0.009534084999447856,
            "y": -0.998971313131029,
            "z": 0.0027179893936865
          },
          "standing_position": [
            -48.132301330566406,
            4.601229783916949,
            -10.561200141906738
          ],
          "visible_nodes": [
            226,
            227,
            228,
            229,
            230,
            231,
            233,
            234,
            245,
            246,
            247,
            256,
            257,
            259,
            265,
            266,
            267,
            271,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            225,
            226,
            227,
            228,
            229,
            230,
            231,
            243,
            245,
            246,
            247,
            256,
            257,
            258,
            260,
            261,
            263,
            264,
            265,
            266,
            267,
            268,
            271,
            272,
            273
          ],
          "floor_index": 1,
          "index": 259,
          "offset_point_count": 0,
          "position": [
            -47.70650100708008,
            5.901710033416748,
            -17.548999786376953
          ],
          "quaternion": {
            "w": 0.010754562275719163,
            "x": 0.012524743597270224,
            "y": -0.9998570429423072,
            "z": 0.0036551734109975067
          },
          "standing_position": [
            -47.70650100708008,
            4.591133846539311,
            -17.548999786376953
          ],
          "visible_nodes": [
            225,
            226,
            227,
            228,
            229,
            230,
            231,
            243,
            245,
            246,
            247,
            256,
            257,
            258,
            260,
            261,
            263,
            264,
            265,
            266,
            267,
            268,
            271,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            227,
            228,
            229,
            243,
            259,
            261,
            263,
            264
          ],
          "floor_index": 1,
          "index": 260,
          "offset_point_count": 0,
          "position": [
            -41.50450134277344,
            5.912680149078369,
            -17.968399047851562
          ],
          "quaternion": {
            "w": 0.026425901019906464,
            "x": 0.012619571856644808,
            "y": -0.999562137824805,
            "z": 0.004236685467525925
          },
          "standing_position": [
            -41.50450134277344,
            4.584624372053633,
            -17.968399047851562
          ],
          "visible_nodes": [
            227,
            228,
            229,
            243,
            259,
            261,
            263,
            264
          ]
        },
        {
          "accessible_nodes": [
            228,
            229,
            243,
            259,
            260,
            262,
            263,
            264
          ],
          "floor_index": 1,
          "index": 261,
          "offset_point_count": 0,
          "position": [
            -36.30500030517578,
            5.938899993896484,
            -18.025400161743164
          ],
          "quaternion": {
            "w": 0.02440389179943749,
            "x": 0.006622890502580537,
            "y": -0.9996802221058935,
            "z": -0.00022010390823814716
          },
          "standing_position": [
            -36.30500030517578,
            4.635827999250636,
            -18.025400161743164
          ],
          "visible_nodes": [
            228,
            229,
            243,
            259,
            260,
            262,
            263,
            264
          ]
        },
        {
          "accessible_nodes": [
            261
          ],
          "floor_index": 1,
          "index": 262,
          "offset_point_count": 0,
          "position": [
            -36.11159896850586,
            5.929969787597656,
            -13.01360034942627
          ],
          "quaternion": {
            "w": 0.017490880662968698,
            "x": 0.010322251526838896,
            "y": -0.9997914290475904,
            "z": 0.002146913604075611
          },
          "standing_position": [
            -36.11159896850586,
            4.616283355754116,
            -13.01360034942627
          ],
          "visible_nodes": [
            261
          ]
        },
        {
          "accessible_nodes": [
            228,
            229,
            243,
            259,
            260,
            261,
            264
          ],
          "floor_index": 1,
          "index": 263,
          "offset_point_count": 0,
          "position": [
            -32.63669967651367,
            5.943689823150635,
            -18.327999114990234
          ],
          "quaternion": {
            "w": -0.03505216675519339,
            "x": 0.010714653717158394,
            "y": -0.9993238174639331,
            "z": 0.002906043007373991
          },
          "standing_position": [
            -32.63669967651367,
            4.6300079445102345,
            -18.327999114990234
          ],
          "visible_nodes": [
            228,
            229,
            243,
            259,
            260,
            261,
            264
          ]
        },
        {
          "accessible_nodes": [
            243,
            259,
            260,
            261,
            263
          ],
          "floor_index": 1,
          "index": 264,
          "offset_point_count": 0,
          "position": [
            -25.62849998474121,
            5.944819927215576,
            -18.095300674438477
          ],
          "quaternion": {
            "w": -0.01872939702616379,
            "x": 0.011265802946635841,
            "y": -0.9997602786384506,
            "z": 0.0012922522139144027
          },
          "standing_position": [
            -25.62849998474121,
            4.626133344674808,
            -18.095300674438477
          ],
          "visible_nodes": [
            243,
            259,
            260,
            261,
            263
          ]
        },
        {
          "accessible_nodes": [
            224,
            225,
            226,
            227,
            228,
            229,
            230,
            231,
            246,
            247,
            256,
            257,
            258,
            259,
            266,
            267,
            268,
            269,
            271,
            272,
            273
          ],
          "floor_index": 1,
          "index": 265,
          "offset_point_count": 0,
          "position": [
            -49.437801361083984,
            5.905429840087891,
            -22.70669937133789
          ],
          "quaternion": {
            "w": 0.012161045086274153,
            "x": 0.010907324647212498,
            "y": -0.9998651204937938,
            "z": 0.001697514584615701
          },
          "standing_position": [
            -49.437801361083984,
            4.589804290628236,
            -22.70669937133789
          ],
          "visible_nodes": [
            224,
            225,
            226,
            227,
            228,
            229,
            230,
            231,
            246,
            247,
            256,
            257,
            258,
            259,
            266,
            267,
            268,
            269,
            271,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            223,
            224,
            225,
            226,
            227,
            228,
            229,
            230,
            257,
            258,
            259,
            265,
            267,
            268,
            269,
            270,
            271
          ],
          "floor_index": 1,
          "index": 266,
          "offset_point_count": 0,
          "position": [
            -49.30950164794922,
            5.912020206451416,
            -29.144800186157227
          ],
          "quaternion": {
            "w": 0.022040505826790267,
            "x": 0.011770453955818227,
            "y": -0.9996856254901108,
            "z": 0.002077352989154906
          },
          "standing_position": [
            -49.30950164794922,
            4.5925258303958945,
            -29.144800186157227
          ],
          "visible_nodes": [
            223,
            224,
            225,
            226,
            227,
            228,
            229,
            230,
            257,
            258,
            259,
            265,
            267,
            268,
            269,
            270,
            271
          ]
        },
        {
          "accessible_nodes": [
            220,
            223,
            224,
            225,
            226,
            227,
            228,
            229,
            244,
            258,
            259,
            265,
            266,
            268,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 267,
          "offset_point_count": 0,
          "position": [
            -48.99089813232422,
            5.920629978179932,
            -35.71780014038086
          ],
          "quaternion": {
            "w": -0.01652832954164261,
            "x": 0.009798306951337123,
            "y": -0.9998105212348998,
            "z": 0.0031211624196482973
          },
          "standing_position": [
            -48.99089813232422,
            4.604682550682801,
            -35.71780014038086
          ],
          "visible_nodes": [
            220,
            223,
            224,
            225,
            226,
            227,
            228,
            229,
            244,
            258,
            259,
            265,
            266,
            268,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            219,
            220,
            221,
            223,
            224,
            225,
            226,
            227,
            228,
            244,
            259,
            265,
            266,
            267,
            269,
            270,
            274
          ],
          "floor_index": 1,
          "index": 268,
          "offset_point_count": 0,
          "position": [
            -49.211299896240234,
            5.9314799308776855,
            -42.27840042114258
          ],
          "quaternion": {
            "w": 0.007957637932774124,
            "x": 0.01275143129758307,
            "y": -0.999882184479353,
            "z": 0.0031119421323970073
          },
          "standing_position": [
            -49.211299896240234,
            4.629297104203295,
            -42.27840042114258
          ],
          "visible_nodes": [
            219,
            220,
            221,
            223,
            224,
            225,
            226,
            227,
            228,
            244,
            259,
            265,
            266,
            267,
            269,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            226,
            227,
            244,
            265,
            266,
            267,
            268,
            270,
            274
          ],
          "floor_index": 1,
          "index": 269,
          "offset_point_count": 0,
          "position": [
            -49.865699768066406,
            5.939740180969238,
            -48.402198791503906
          ],
          "quaternion": {
            "w": 0.01073063966823579,
            "x": 0.01194594649003381,
            "y": -0.9998706719097017,
            "z": 0.0008870022881820415
          },
          "standing_position": [
            -49.865699768066406,
            4.648956543673424,
            -48.402198791503906
          ],
          "visible_nodes": [
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            226,
            227,
            244,
            265,
            266,
            267,
            268,
            270,
            274
          ]
        },
        {
          "accessible_nodes": [
            211,
            212,
            217,
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            226,
            244,
            266,
            267,
            268,
            269,
            274
          ],
          "floor_index": 1,
          "index": 270,
          "offset_point_count": 0,
          "position": [
            -49.717899322509766,
            5.935410022735596,
            -55.4197998046875
          ],
          "quaternion": {
            "w": 0.008893734924238401,
            "x": 0.01164080729848048,
            "y": -0.9998920203561875,
            "z": 0.0011627408077910858
          },
          "standing_position": [
            -49.717899322509766,
            4.665846711700956,
            -55.4197998046875
          ],
          "visible_nodes": [
            211,
            212,
            217,
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            226,
            244,
            266,
            267,
            268,
            269,
            274
          ]
        },
        {
          "accessible_nodes": [
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            246,
            247,
            256,
            257,
            258,
            259,
            265,
            266,
            272,
            273
          ],
          "floor_index": 1,
          "index": 271,
          "offset_point_count": 0,
          "position": [
            -53.568199157714844,
            5.9084601402282715,
            -1.4594299793243408
          ],
          "quaternion": {
            "w": 0.010527727612465572,
            "x": 0.011168353845190387,
            "y": -0.9998739878414129,
            "z": 0.004056233984243767
          },
          "standing_position": [
            -53.568199157714844,
            4.587415502440647,
            -1.4594299793243408
          ],
          "visible_nodes": [
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            246,
            247,
            256,
            257,
            258,
            259,
            265,
            266,
            272,
            273
          ]
        },
        {
          "accessible_nodes": [
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            234,
            245,
            246,
            248,
            256,
            257,
            258,
            259,
            265,
            271,
            273
          ],
          "floor_index": 1,
          "index": 272,
          "offset_point_count": 0,
          "position": [
            -59.69860076904297,
            5.89447021484375,
            -0.576337993144989
          ],
          "quaternion": {
            "w": -0.007536477870418573,
            "x": 0.013455265496638695,
            "y": -0.9998795764654785,
            "z": 0.0017237220972707928
          },
          "standing_position": [
            -59.69860076904297,
            4.574823369477616,
            -0.576337993144989
          ],
          "visible_nodes": [
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            234,
            245,
            246,
            248,
            256,
            257,
            258,
            259,
            265,
            271,
            273
          ]
        },
        {
          "accessible_nodes": [
            231,
            232,
            233,
            234,
            245,
            247,
            248,
            256,
            257,
            258,
            259,
            265,
            271,
            272
          ],
          "floor_index": 1,
          "index": 273,
          "offset_point_count": 0,
          "position": [
            -64.30269622802734,
            5.881450176239014,
            -0.24177399277687073
          ],
          "quaternion": {
            "w": 0.0069050784230944824,
            "x": 0.01114784847928027,
            "y": -0.9999126008702942,
            "z": 0.001684929531251219
          },
          "standing_position": [
            -64.30269622802734,
            4.555485480771641,
            -0.24177399277687073
          ],
          "visible_nodes": [
            231,
            232,
            233,
            234,
            245,
            247,
            248,
            256,
            257,
            258,
            259,
            265,
            271,
            272
          ]
        },
        {
          "accessible_nodes": [
            211,
            214,
            217,
            218,
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            244,
            267,
            268,
            269,
            270
          ],
          "floor_index": 1,
          "index": 274,
          "offset_point_count": 0,
          "position": [
            -49.555198669433594,
            5.940489768981934,
            -60.49620056152344
          ],
          "quaternion": {
            "w": -0.004514142366107185,
            "x": 0.011393107595784543,
            "y": -0.9999223321317088,
            "z": 0.0022702789450570597
          },
          "standing_position": [
            -49.555198669433594,
            4.675484414029243,
            -60.49620056152344
          ],
          "visible_nodes": [
            211,
            214,
            217,
            218,
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            244,
            267,
            268,
            269,
            270
          ]
        }
      ],
      "panorama": {
        "count": 275,
        "list": [
          {
            "back": "images/cube_2048/0/49b3b634367ecf4189cb2277e211bde9/0_b.jpg",
            "down": "images/cube_2048/0/49b3b634367ecf4189cb2277e211bde9/0_d.jpg",
            "front": "images/cube_2048/0/49b3b634367ecf4189cb2277e211bde9/0_f.jpg",
            "index": 0,
            "left": "images/cube_2048/0/49b3b634367ecf4189cb2277e211bde9/0_l.jpg",
            "right": "images/cube_2048/0/49b3b634367ecf4189cb2277e211bde9/0_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/0/49b3b634367ecf4189cb2277e211bde9/0_u.jpg"
          },
          {
            "back": "images/cube_2048/1/8a63b7e22f51ff6670ecf265e5c7f70e/1_b.jpg",
            "down": "images/cube_2048/1/8a63b7e22f51ff6670ecf265e5c7f70e/1_d.jpg",
            "front": "images/cube_2048/1/8a63b7e22f51ff6670ecf265e5c7f70e/1_f.jpg",
            "index": 1,
            "left": "images/cube_2048/1/8a63b7e22f51ff6670ecf265e5c7f70e/1_l.jpg",
            "right": "images/cube_2048/1/8a63b7e22f51ff6670ecf265e5c7f70e/1_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/1/8a63b7e22f51ff6670ecf265e5c7f70e/1_u.jpg"
          },
          {
            "back": "images/cube_2048/2/efade58005b095ee53ec7dddca11ed7b/2_b.jpg",
            "down": "images/cube_2048/2/efade58005b095ee53ec7dddca11ed7b/2_d.jpg",
            "front": "images/cube_2048/2/efade58005b095ee53ec7dddca11ed7b/2_f.jpg",
            "index": 2,
            "left": "images/cube_2048/2/efade58005b095ee53ec7dddca11ed7b/2_l.jpg",
            "right": "images/cube_2048/2/efade58005b095ee53ec7dddca11ed7b/2_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/2/efade58005b095ee53ec7dddca11ed7b/2_u.jpg"
          },
          {
            "back": "images/cube_2048/3/3ecf6270ca35fa70a68271b1878c4c14/3_b.jpg",
            "down": "images/cube_2048/3/3ecf6270ca35fa70a68271b1878c4c14/3_d.jpg",
            "front": "images/cube_2048/3/3ecf6270ca35fa70a68271b1878c4c14/3_f.jpg",
            "index": 3,
            "left": "images/cube_2048/3/3ecf6270ca35fa70a68271b1878c4c14/3_l.jpg",
            "right": "images/cube_2048/3/3ecf6270ca35fa70a68271b1878c4c14/3_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/3/3ecf6270ca35fa70a68271b1878c4c14/3_u.jpg"
          },
          {
            "back": "images/cube_2048/4/1064862e3da44238d7cfd8cfa6ba5a97/4_b.jpg",
            "down": "images/cube_2048/4/1064862e3da44238d7cfd8cfa6ba5a97/4_d.jpg",
            "front": "images/cube_2048/4/1064862e3da44238d7cfd8cfa6ba5a97/4_f.jpg",
            "index": 4,
            "left": "images/cube_2048/4/1064862e3da44238d7cfd8cfa6ba5a97/4_l.jpg",
            "right": "images/cube_2048/4/1064862e3da44238d7cfd8cfa6ba5a97/4_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/4/1064862e3da44238d7cfd8cfa6ba5a97/4_u.jpg"
          },
          {
            "back": "images/cube_2048/5/fa255cfc984326261468b060766d4a73/5_b.jpg",
            "down": "images/cube_2048/5/fa255cfc984326261468b060766d4a73/5_d.jpg",
            "front": "images/cube_2048/5/fa255cfc984326261468b060766d4a73/5_f.jpg",
            "index": 5,
            "left": "images/cube_2048/5/fa255cfc984326261468b060766d4a73/5_l.jpg",
            "right": "images/cube_2048/5/fa255cfc984326261468b060766d4a73/5_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/5/fa255cfc984326261468b060766d4a73/5_u.jpg"
          },
          {
            "back": "images/cube_2048/6/233ae7dd82783e7c218fea6b4d2b2c8b/6_b.jpg",
            "down": "images/cube_2048/6/233ae7dd82783e7c218fea6b4d2b2c8b/6_d.jpg",
            "front": "images/cube_2048/6/233ae7dd82783e7c218fea6b4d2b2c8b/6_f.jpg",
            "index": 6,
            "left": "images/cube_2048/6/233ae7dd82783e7c218fea6b4d2b2c8b/6_l.jpg",
            "right": "images/cube_2048/6/233ae7dd82783e7c218fea6b4d2b2c8b/6_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/6/233ae7dd82783e7c218fea6b4d2b2c8b/6_u.jpg"
          },
          {
            "back": "images/cube_2048/7/f7e8005862d0b4de47dae28a09fc2805/7_b.jpg",
            "down": "images/cube_2048/7/f7e8005862d0b4de47dae28a09fc2805/7_d.jpg",
            "front": "images/cube_2048/7/f7e8005862d0b4de47dae28a09fc2805/7_f.jpg",
            "index": 7,
            "left": "images/cube_2048/7/f7e8005862d0b4de47dae28a09fc2805/7_l.jpg",
            "right": "images/cube_2048/7/f7e8005862d0b4de47dae28a09fc2805/7_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/7/f7e8005862d0b4de47dae28a09fc2805/7_u.jpg"
          },
          {
            "back": "images/cube_2048/8/cd3dff9fc2fb7065c8c825dee215542f/8_b.jpg",
            "down": "images/cube_2048/8/cd3dff9fc2fb7065c8c825dee215542f/8_d.jpg",
            "front": "images/cube_2048/8/cd3dff9fc2fb7065c8c825dee215542f/8_f.jpg",
            "index": 8,
            "left": "images/cube_2048/8/cd3dff9fc2fb7065c8c825dee215542f/8_l.jpg",
            "right": "images/cube_2048/8/cd3dff9fc2fb7065c8c825dee215542f/8_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/8/cd3dff9fc2fb7065c8c825dee215542f/8_u.jpg"
          },
          {
            "back": "images/cube_2048/9/4acb6e69bdb1cd2486d0f8abc777905b/9_b.jpg",
            "down": "images/cube_2048/9/4acb6e69bdb1cd2486d0f8abc777905b/9_d.jpg",
            "front": "images/cube_2048/9/4acb6e69bdb1cd2486d0f8abc777905b/9_f.jpg",
            "index": 9,
            "left": "images/cube_2048/9/4acb6e69bdb1cd2486d0f8abc777905b/9_l.jpg",
            "right": "images/cube_2048/9/4acb6e69bdb1cd2486d0f8abc777905b/9_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/9/4acb6e69bdb1cd2486d0f8abc777905b/9_u.jpg"
          },
          {
            "back": "images/cube_2048/10/ec16c8d6ef517c27c3b9258d3a964177/10_b.jpg",
            "down": "images/cube_2048/10/ec16c8d6ef517c27c3b9258d3a964177/10_d.jpg",
            "front": "images/cube_2048/10/ec16c8d6ef517c27c3b9258d3a964177/10_f.jpg",
            "index": 10,
            "left": "images/cube_2048/10/ec16c8d6ef517c27c3b9258d3a964177/10_l.jpg",
            "right": "images/cube_2048/10/ec16c8d6ef517c27c3b9258d3a964177/10_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/10/ec16c8d6ef517c27c3b9258d3a964177/10_u.jpg"
          },
          {
            "back": "images/cube_2048/11/914255653590a28107b3ce98652e0719/11_b.jpg",
            "down": "images/cube_2048/11/914255653590a28107b3ce98652e0719/11_d.jpg",
            "front": "images/cube_2048/11/914255653590a28107b3ce98652e0719/11_f.jpg",
            "index": 11,
            "left": "images/cube_2048/11/914255653590a28107b3ce98652e0719/11_l.jpg",
            "right": "images/cube_2048/11/914255653590a28107b3ce98652e0719/11_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/11/914255653590a28107b3ce98652e0719/11_u.jpg"
          },
          {
            "back": "images/cube_2048/12/b531077952db192a85137c714d48f5e7/12_b.jpg",
            "down": "images/cube_2048/12/b531077952db192a85137c714d48f5e7/12_d.jpg",
            "front": "images/cube_2048/12/b531077952db192a85137c714d48f5e7/12_f.jpg",
            "index": 12,
            "left": "images/cube_2048/12/b531077952db192a85137c714d48f5e7/12_l.jpg",
            "right": "images/cube_2048/12/b531077952db192a85137c714d48f5e7/12_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/12/b531077952db192a85137c714d48f5e7/12_u.jpg"
          },
          {
            "back": "images/cube_2048/13/9d53f0727703657595da5095d14fd66a/13_b.jpg",
            "down": "images/cube_2048/13/9d53f0727703657595da5095d14fd66a/13_d.jpg",
            "front": "images/cube_2048/13/9d53f0727703657595da5095d14fd66a/13_f.jpg",
            "index": 13,
            "left": "images/cube_2048/13/9d53f0727703657595da5095d14fd66a/13_l.jpg",
            "right": "images/cube_2048/13/9d53f0727703657595da5095d14fd66a/13_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/13/9d53f0727703657595da5095d14fd66a/13_u.jpg"
          },
          {
            "back": "images/cube_2048/14/7afb209e1ce44117290cceb4fb015065/14_b.jpg",
            "down": "images/cube_2048/14/7afb209e1ce44117290cceb4fb015065/14_d.jpg",
            "front": "images/cube_2048/14/7afb209e1ce44117290cceb4fb015065/14_f.jpg",
            "index": 14,
            "left": "images/cube_2048/14/7afb209e1ce44117290cceb4fb015065/14_l.jpg",
            "right": "images/cube_2048/14/7afb209e1ce44117290cceb4fb015065/14_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/14/7afb209e1ce44117290cceb4fb015065/14_u.jpg"
          },
          {
            "back": "images/cube_2048/15/7415b94c9eddb297e917bcdce4e50239/15_b.jpg",
            "down": "images/cube_2048/15/7415b94c9eddb297e917bcdce4e50239/15_d.jpg",
            "front": "images/cube_2048/15/7415b94c9eddb297e917bcdce4e50239/15_f.jpg",
            "index": 15,
            "left": "images/cube_2048/15/7415b94c9eddb297e917bcdce4e50239/15_l.jpg",
            "right": "images/cube_2048/15/7415b94c9eddb297e917bcdce4e50239/15_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/15/7415b94c9eddb297e917bcdce4e50239/15_u.jpg"
          },
          {
            "back": "images/cube_2048/16/76fd4d2e535daa46795486f371d56a16/16_b.jpg",
            "down": "images/cube_2048/16/76fd4d2e535daa46795486f371d56a16/16_d.jpg",
            "front": "images/cube_2048/16/76fd4d2e535daa46795486f371d56a16/16_f.jpg",
            "index": 16,
            "left": "images/cube_2048/16/76fd4d2e535daa46795486f371d56a16/16_l.jpg",
            "right": "images/cube_2048/16/76fd4d2e535daa46795486f371d56a16/16_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/16/76fd4d2e535daa46795486f371d56a16/16_u.jpg"
          },
          {
            "back": "images/cube_2048/17/f29eb35438bb6eabd84a58d009a5ecd0/17_b.jpg",
            "down": "images/cube_2048/17/f29eb35438bb6eabd84a58d009a5ecd0/17_d.jpg",
            "front": "images/cube_2048/17/f29eb35438bb6eabd84a58d009a5ecd0/17_f.jpg",
            "index": 17,
            "left": "images/cube_2048/17/f29eb35438bb6eabd84a58d009a5ecd0/17_l.jpg",
            "right": "images/cube_2048/17/f29eb35438bb6eabd84a58d009a5ecd0/17_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/17/f29eb35438bb6eabd84a58d009a5ecd0/17_u.jpg"
          },
          {
            "back": "images/cube_2048/18/0075e61c203e5aee82870b5a4e87819c/18_b.jpg",
            "down": "images/cube_2048/18/0075e61c203e5aee82870b5a4e87819c/18_d.jpg",
            "front": "images/cube_2048/18/0075e61c203e5aee82870b5a4e87819c/18_f.jpg",
            "index": 18,
            "left": "images/cube_2048/18/0075e61c203e5aee82870b5a4e87819c/18_l.jpg",
            "right": "images/cube_2048/18/0075e61c203e5aee82870b5a4e87819c/18_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/18/0075e61c203e5aee82870b5a4e87819c/18_u.jpg"
          },
          {
            "back": "images/cube_2048/19/a902ba2a94eff566a0116508091cea51/19_b.jpg",
            "down": "images/cube_2048/19/a902ba2a94eff566a0116508091cea51/19_d.jpg",
            "front": "images/cube_2048/19/a902ba2a94eff566a0116508091cea51/19_f.jpg",
            "index": 19,
            "left": "images/cube_2048/19/a902ba2a94eff566a0116508091cea51/19_l.jpg",
            "right": "images/cube_2048/19/a902ba2a94eff566a0116508091cea51/19_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/19/a902ba2a94eff566a0116508091cea51/19_u.jpg"
          },
          {
            "back": "images/cube_2048/20/514c4e0c6f157e550f32cba01ca22907/20_b.jpg",
            "down": "images/cube_2048/20/514c4e0c6f157e550f32cba01ca22907/20_d.jpg",
            "front": "images/cube_2048/20/514c4e0c6f157e550f32cba01ca22907/20_f.jpg",
            "index": 20,
            "left": "images/cube_2048/20/514c4e0c6f157e550f32cba01ca22907/20_l.jpg",
            "right": "images/cube_2048/20/514c4e0c6f157e550f32cba01ca22907/20_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/20/514c4e0c6f157e550f32cba01ca22907/20_u.jpg"
          },
          {
            "back": "images/cube_2048/21/d3b65db2f1e0e65495701021c429aee2/21_b.jpg",
            "down": "images/cube_2048/21/d3b65db2f1e0e65495701021c429aee2/21_d.jpg",
            "front": "images/cube_2048/21/d3b65db2f1e0e65495701021c429aee2/21_f.jpg",
            "index": 21,
            "left": "images/cube_2048/21/d3b65db2f1e0e65495701021c429aee2/21_l.jpg",
            "right": "images/cube_2048/21/d3b65db2f1e0e65495701021c429aee2/21_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/21/d3b65db2f1e0e65495701021c429aee2/21_u.jpg"
          },
          {
            "back": "images/cube_2048/22/d78624d182181c09eb6965298d0db42a/22_b.jpg",
            "down": "images/cube_2048/22/d78624d182181c09eb6965298d0db42a/22_d.jpg",
            "front": "images/cube_2048/22/d78624d182181c09eb6965298d0db42a/22_f.jpg",
            "index": 22,
            "left": "images/cube_2048/22/d78624d182181c09eb6965298d0db42a/22_l.jpg",
            "right": "images/cube_2048/22/d78624d182181c09eb6965298d0db42a/22_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/22/d78624d182181c09eb6965298d0db42a/22_u.jpg"
          },
          {
            "back": "images/cube_2048/23/82db1633ef44b5e69f62720f98434419/23_b.jpg",
            "down": "images/cube_2048/23/82db1633ef44b5e69f62720f98434419/23_d.jpg",
            "front": "images/cube_2048/23/82db1633ef44b5e69f62720f98434419/23_f.jpg",
            "index": 23,
            "left": "images/cube_2048/23/82db1633ef44b5e69f62720f98434419/23_l.jpg",
            "right": "images/cube_2048/23/82db1633ef44b5e69f62720f98434419/23_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/23/82db1633ef44b5e69f62720f98434419/23_u.jpg"
          },
          {
            "back": "images/cube_2048/24/66c170bfbffaa21822e555c31b5d23cc/24_b.jpg",
            "down": "images/cube_2048/24/66c170bfbffaa21822e555c31b5d23cc/24_d.jpg",
            "front": "images/cube_2048/24/66c170bfbffaa21822e555c31b5d23cc/24_f.jpg",
            "index": 24,
            "left": "images/cube_2048/24/66c170bfbffaa21822e555c31b5d23cc/24_l.jpg",
            "right": "images/cube_2048/24/66c170bfbffaa21822e555c31b5d23cc/24_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/24/66c170bfbffaa21822e555c31b5d23cc/24_u.jpg"
          },
          {
            "back": "images/cube_2048/25/ad27cfe5dcbbc119e1520a650b3c5410/25_b.jpg",
            "down": "images/cube_2048/25/ad27cfe5dcbbc119e1520a650b3c5410/25_d.jpg",
            "front": "images/cube_2048/25/ad27cfe5dcbbc119e1520a650b3c5410/25_f.jpg",
            "index": 25,
            "left": "images/cube_2048/25/ad27cfe5dcbbc119e1520a650b3c5410/25_l.jpg",
            "right": "images/cube_2048/25/ad27cfe5dcbbc119e1520a650b3c5410/25_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/25/ad27cfe5dcbbc119e1520a650b3c5410/25_u.jpg"
          },
          {
            "back": "images/cube_2048/26/2401f5fb24b50efca6478f29613c04d1/26_b.jpg",
            "down": "images/cube_2048/26/2401f5fb24b50efca6478f29613c04d1/26_d.jpg",
            "front": "images/cube_2048/26/2401f5fb24b50efca6478f29613c04d1/26_f.jpg",
            "index": 26,
            "left": "images/cube_2048/26/2401f5fb24b50efca6478f29613c04d1/26_l.jpg",
            "right": "images/cube_2048/26/2401f5fb24b50efca6478f29613c04d1/26_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/26/2401f5fb24b50efca6478f29613c04d1/26_u.jpg"
          },
          {
            "back": "images/cube_2048/27/fef446624f38f45a168a27e89240094e/27_b.jpg",
            "down": "images/cube_2048/27/fef446624f38f45a168a27e89240094e/27_d.jpg",
            "front": "images/cube_2048/27/fef446624f38f45a168a27e89240094e/27_f.jpg",
            "index": 27,
            "left": "images/cube_2048/27/fef446624f38f45a168a27e89240094e/27_l.jpg",
            "right": "images/cube_2048/27/fef446624f38f45a168a27e89240094e/27_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/27/fef446624f38f45a168a27e89240094e/27_u.jpg"
          },
          {
            "back": "images/cube_2048/28/08b37aa309f5b9b8a54b3e7704fdf9b3/28_b.jpg",
            "down": "images/cube_2048/28/08b37aa309f5b9b8a54b3e7704fdf9b3/28_d.jpg",
            "front": "images/cube_2048/28/08b37aa309f5b9b8a54b3e7704fdf9b3/28_f.jpg",
            "index": 28,
            "left": "images/cube_2048/28/08b37aa309f5b9b8a54b3e7704fdf9b3/28_l.jpg",
            "right": "images/cube_2048/28/08b37aa309f5b9b8a54b3e7704fdf9b3/28_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/28/08b37aa309f5b9b8a54b3e7704fdf9b3/28_u.jpg"
          },
          {
            "back": "images/cube_2048/29/2c8340e66a6888f8b2c1f0b09f42f496/29_b.jpg",
            "down": "images/cube_2048/29/2c8340e66a6888f8b2c1f0b09f42f496/29_d.jpg",
            "front": "images/cube_2048/29/2c8340e66a6888f8b2c1f0b09f42f496/29_f.jpg",
            "index": 29,
            "left": "images/cube_2048/29/2c8340e66a6888f8b2c1f0b09f42f496/29_l.jpg",
            "right": "images/cube_2048/29/2c8340e66a6888f8b2c1f0b09f42f496/29_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/29/2c8340e66a6888f8b2c1f0b09f42f496/29_u.jpg"
          },
          {
            "back": "images/cube_2048/30/a6a2d31ed560d23f2ad014f6e3aa066b/30_b.jpg",
            "down": "images/cube_2048/30/a6a2d31ed560d23f2ad014f6e3aa066b/30_d.jpg",
            "front": "images/cube_2048/30/a6a2d31ed560d23f2ad014f6e3aa066b/30_f.jpg",
            "index": 30,
            "left": "images/cube_2048/30/a6a2d31ed560d23f2ad014f6e3aa066b/30_l.jpg",
            "right": "images/cube_2048/30/a6a2d31ed560d23f2ad014f6e3aa066b/30_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/30/a6a2d31ed560d23f2ad014f6e3aa066b/30_u.jpg"
          },
          {
            "back": "images/cube_2048/31/d2748983f455a0e2c85b5f8249b65fb0/31_b.jpg",
            "down": "images/cube_2048/31/d2748983f455a0e2c85b5f8249b65fb0/31_d.jpg",
            "front": "images/cube_2048/31/d2748983f455a0e2c85b5f8249b65fb0/31_f.jpg",
            "index": 31,
            "left": "images/cube_2048/31/d2748983f455a0e2c85b5f8249b65fb0/31_l.jpg",
            "right": "images/cube_2048/31/d2748983f455a0e2c85b5f8249b65fb0/31_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/31/d2748983f455a0e2c85b5f8249b65fb0/31_u.jpg"
          },
          {
            "back": "images/cube_2048/32/162932192ec97dee2e9635731598c437/32_b.jpg",
            "down": "images/cube_2048/32/162932192ec97dee2e9635731598c437/32_d.jpg",
            "front": "images/cube_2048/32/162932192ec97dee2e9635731598c437/32_f.jpg",
            "index": 32,
            "left": "images/cube_2048/32/162932192ec97dee2e9635731598c437/32_l.jpg",
            "right": "images/cube_2048/32/162932192ec97dee2e9635731598c437/32_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/32/162932192ec97dee2e9635731598c437/32_u.jpg"
          },
          {
            "back": "images/cube_2048/33/f34ade526fb6497656ed0810a183df1f/33_b.jpg",
            "down": "images/cube_2048/33/f34ade526fb6497656ed0810a183df1f/33_d.jpg",
            "front": "images/cube_2048/33/f34ade526fb6497656ed0810a183df1f/33_f.jpg",
            "index": 33,
            "left": "images/cube_2048/33/f34ade526fb6497656ed0810a183df1f/33_l.jpg",
            "right": "images/cube_2048/33/f34ade526fb6497656ed0810a183df1f/33_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/33/f34ade526fb6497656ed0810a183df1f/33_u.jpg"
          },
          {
            "back": "images/cube_2048/34/eaf1acca994bcdc0ada544220706808d/34_b.jpg",
            "down": "images/cube_2048/34/eaf1acca994bcdc0ada544220706808d/34_d.jpg",
            "front": "images/cube_2048/34/eaf1acca994bcdc0ada544220706808d/34_f.jpg",
            "index": 34,
            "left": "images/cube_2048/34/eaf1acca994bcdc0ada544220706808d/34_l.jpg",
            "right": "images/cube_2048/34/eaf1acca994bcdc0ada544220706808d/34_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/34/eaf1acca994bcdc0ada544220706808d/34_u.jpg"
          },
          {
            "back": "images/cube_2048/35/80e4973b6a4c3577af93acc6702a534a/35_b.jpg",
            "down": "images/cube_2048/35/80e4973b6a4c3577af93acc6702a534a/35_d.jpg",
            "front": "images/cube_2048/35/80e4973b6a4c3577af93acc6702a534a/35_f.jpg",
            "index": 35,
            "left": "images/cube_2048/35/80e4973b6a4c3577af93acc6702a534a/35_l.jpg",
            "right": "images/cube_2048/35/80e4973b6a4c3577af93acc6702a534a/35_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/35/80e4973b6a4c3577af93acc6702a534a/35_u.jpg"
          },
          {
            "back": "images/cube_2048/36/50123bb67e2104c2ade02d2fd579436c/36_b.jpg",
            "down": "images/cube_2048/36/50123bb67e2104c2ade02d2fd579436c/36_d.jpg",
            "front": "images/cube_2048/36/50123bb67e2104c2ade02d2fd579436c/36_f.jpg",
            "index": 36,
            "left": "images/cube_2048/36/50123bb67e2104c2ade02d2fd579436c/36_l.jpg",
            "right": "images/cube_2048/36/50123bb67e2104c2ade02d2fd579436c/36_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/36/50123bb67e2104c2ade02d2fd579436c/36_u.jpg"
          },
          {
            "back": "images/cube_2048/37/80a00a2d08392814cad95e9a66f56983/37_b.jpg",
            "down": "images/cube_2048/37/80a00a2d08392814cad95e9a66f56983/37_d.jpg",
            "front": "images/cube_2048/37/80a00a2d08392814cad95e9a66f56983/37_f.jpg",
            "index": 37,
            "left": "images/cube_2048/37/80a00a2d08392814cad95e9a66f56983/37_l.jpg",
            "right": "images/cube_2048/37/80a00a2d08392814cad95e9a66f56983/37_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/37/80a00a2d08392814cad95e9a66f56983/37_u.jpg"
          },
          {
            "back": "images/cube_2048/38/919497b0a1949bd7641df502459beed9/38_b.jpg",
            "down": "images/cube_2048/38/919497b0a1949bd7641df502459beed9/38_d.jpg",
            "front": "images/cube_2048/38/919497b0a1949bd7641df502459beed9/38_f.jpg",
            "index": 38,
            "left": "images/cube_2048/38/919497b0a1949bd7641df502459beed9/38_l.jpg",
            "right": "images/cube_2048/38/919497b0a1949bd7641df502459beed9/38_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/38/919497b0a1949bd7641df502459beed9/38_u.jpg"
          },
          {
            "back": "images/cube_2048/39/c1935bc7e5efa03c511e0c2d8501abf0/39_b.jpg",
            "down": "images/cube_2048/39/c1935bc7e5efa03c511e0c2d8501abf0/39_d.jpg",
            "front": "images/cube_2048/39/c1935bc7e5efa03c511e0c2d8501abf0/39_f.jpg",
            "index": 39,
            "left": "images/cube_2048/39/c1935bc7e5efa03c511e0c2d8501abf0/39_l.jpg",
            "right": "images/cube_2048/39/c1935bc7e5efa03c511e0c2d8501abf0/39_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/39/c1935bc7e5efa03c511e0c2d8501abf0/39_u.jpg"
          },
          {
            "back": "images/cube_2048/40/e5439e45a909f64aa021705b43e0dd83/40_b.jpg",
            "down": "images/cube_2048/40/e5439e45a909f64aa021705b43e0dd83/40_d.jpg",
            "front": "images/cube_2048/40/e5439e45a909f64aa021705b43e0dd83/40_f.jpg",
            "index": 40,
            "left": "images/cube_2048/40/e5439e45a909f64aa021705b43e0dd83/40_l.jpg",
            "right": "images/cube_2048/40/e5439e45a909f64aa021705b43e0dd83/40_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/40/e5439e45a909f64aa021705b43e0dd83/40_u.jpg"
          },
          {
            "back": "images/cube_2048/41/c96ec26d51c30889805c879923fa755a/41_b.jpg",
            "down": "images/cube_2048/41/c96ec26d51c30889805c879923fa755a/41_d.jpg",
            "front": "images/cube_2048/41/c96ec26d51c30889805c879923fa755a/41_f.jpg",
            "index": 41,
            "left": "images/cube_2048/41/c96ec26d51c30889805c879923fa755a/41_l.jpg",
            "right": "images/cube_2048/41/c96ec26d51c30889805c879923fa755a/41_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/41/c96ec26d51c30889805c879923fa755a/41_u.jpg"
          },
          {
            "back": "images/cube_2048/42/fc34abe13380ceee37db918f8cad12fe/42_b.jpg",
            "down": "images/cube_2048/42/fc34abe13380ceee37db918f8cad12fe/42_d.jpg",
            "front": "images/cube_2048/42/fc34abe13380ceee37db918f8cad12fe/42_f.jpg",
            "index": 42,
            "left": "images/cube_2048/42/fc34abe13380ceee37db918f8cad12fe/42_l.jpg",
            "right": "images/cube_2048/42/fc34abe13380ceee37db918f8cad12fe/42_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/42/fc34abe13380ceee37db918f8cad12fe/42_u.jpg"
          },
          {
            "back": "images/cube_2048/43/aad94f179882e03672cbe2d4029998ac/43_b.jpg",
            "down": "images/cube_2048/43/aad94f179882e03672cbe2d4029998ac/43_d.jpg",
            "front": "images/cube_2048/43/aad94f179882e03672cbe2d4029998ac/43_f.jpg",
            "index": 43,
            "left": "images/cube_2048/43/aad94f179882e03672cbe2d4029998ac/43_l.jpg",
            "right": "images/cube_2048/43/aad94f179882e03672cbe2d4029998ac/43_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/43/aad94f179882e03672cbe2d4029998ac/43_u.jpg"
          },
          {
            "back": "images/cube_2048/44/3c0defa7f5d375389fca9b7c0894c145/44_b.jpg",
            "down": "images/cube_2048/44/3c0defa7f5d375389fca9b7c0894c145/44_d.jpg",
            "front": "images/cube_2048/44/3c0defa7f5d375389fca9b7c0894c145/44_f.jpg",
            "index": 44,
            "left": "images/cube_2048/44/3c0defa7f5d375389fca9b7c0894c145/44_l.jpg",
            "right": "images/cube_2048/44/3c0defa7f5d375389fca9b7c0894c145/44_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/44/3c0defa7f5d375389fca9b7c0894c145/44_u.jpg"
          },
          {
            "back": "images/cube_2048/45/fe8bdf4dce3a6b999963dfb9fc2d1a90/45_b.jpg",
            "down": "images/cube_2048/45/fe8bdf4dce3a6b999963dfb9fc2d1a90/45_d.jpg",
            "front": "images/cube_2048/45/fe8bdf4dce3a6b999963dfb9fc2d1a90/45_f.jpg",
            "index": 45,
            "left": "images/cube_2048/45/fe8bdf4dce3a6b999963dfb9fc2d1a90/45_l.jpg",
            "right": "images/cube_2048/45/fe8bdf4dce3a6b999963dfb9fc2d1a90/45_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/45/fe8bdf4dce3a6b999963dfb9fc2d1a90/45_u.jpg"
          },
          {
            "back": "images/cube_2048/46/e905f4a8a6d07f00be692bf28f7dde6e/46_b.jpg",
            "down": "images/cube_2048/46/e905f4a8a6d07f00be692bf28f7dde6e/46_d.jpg",
            "front": "images/cube_2048/46/e905f4a8a6d07f00be692bf28f7dde6e/46_f.jpg",
            "index": 46,
            "left": "images/cube_2048/46/e905f4a8a6d07f00be692bf28f7dde6e/46_l.jpg",
            "right": "images/cube_2048/46/e905f4a8a6d07f00be692bf28f7dde6e/46_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/46/e905f4a8a6d07f00be692bf28f7dde6e/46_u.jpg"
          },
          {
            "back": "images/cube_2048/47/114d60b3475ab38300eba781e3c03c4d/47_b.jpg",
            "down": "images/cube_2048/47/114d60b3475ab38300eba781e3c03c4d/47_d.jpg",
            "front": "images/cube_2048/47/114d60b3475ab38300eba781e3c03c4d/47_f.jpg",
            "index": 47,
            "left": "images/cube_2048/47/114d60b3475ab38300eba781e3c03c4d/47_l.jpg",
            "right": "images/cube_2048/47/114d60b3475ab38300eba781e3c03c4d/47_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/47/114d60b3475ab38300eba781e3c03c4d/47_u.jpg"
          },
          {
            "back": "images/cube_2048/48/61631a2a1a28ce842dc8aefc9d20b196/48_b.jpg",
            "down": "images/cube_2048/48/61631a2a1a28ce842dc8aefc9d20b196/48_d.jpg",
            "front": "images/cube_2048/48/61631a2a1a28ce842dc8aefc9d20b196/48_f.jpg",
            "index": 48,
            "left": "images/cube_2048/48/61631a2a1a28ce842dc8aefc9d20b196/48_l.jpg",
            "right": "images/cube_2048/48/61631a2a1a28ce842dc8aefc9d20b196/48_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/48/61631a2a1a28ce842dc8aefc9d20b196/48_u.jpg"
          },
          {
            "back": "images/cube_2048/49/98749036b4106a2ff5d46147aaed1b97/49_b.jpg",
            "down": "images/cube_2048/49/98749036b4106a2ff5d46147aaed1b97/49_d.jpg",
            "front": "images/cube_2048/49/98749036b4106a2ff5d46147aaed1b97/49_f.jpg",
            "index": 49,
            "left": "images/cube_2048/49/98749036b4106a2ff5d46147aaed1b97/49_l.jpg",
            "right": "images/cube_2048/49/98749036b4106a2ff5d46147aaed1b97/49_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/49/98749036b4106a2ff5d46147aaed1b97/49_u.jpg"
          },
          {
            "back": "images/cube_2048/50/3c71bbbb2786b478ef7e311f21e59047/50_b.jpg",
            "down": "images/cube_2048/50/3c71bbbb2786b478ef7e311f21e59047/50_d.jpg",
            "front": "images/cube_2048/50/3c71bbbb2786b478ef7e311f21e59047/50_f.jpg",
            "index": 50,
            "left": "images/cube_2048/50/3c71bbbb2786b478ef7e311f21e59047/50_l.jpg",
            "right": "images/cube_2048/50/3c71bbbb2786b478ef7e311f21e59047/50_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/50/3c71bbbb2786b478ef7e311f21e59047/50_u.jpg"
          },
          {
            "back": "images/cube_2048/51/cf6d304fe7542907fef1eba6decbb3fe/51_b.jpg",
            "down": "images/cube_2048/51/cf6d304fe7542907fef1eba6decbb3fe/51_d.jpg",
            "front": "images/cube_2048/51/cf6d304fe7542907fef1eba6decbb3fe/51_f.jpg",
            "index": 51,
            "left": "images/cube_2048/51/cf6d304fe7542907fef1eba6decbb3fe/51_l.jpg",
            "right": "images/cube_2048/51/cf6d304fe7542907fef1eba6decbb3fe/51_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/51/cf6d304fe7542907fef1eba6decbb3fe/51_u.jpg"
          },
          {
            "back": "images/cube_2048/52/40db11d3ae50bf30cdc71bd37ac84f38/52_b.jpg",
            "down": "images/cube_2048/52/40db11d3ae50bf30cdc71bd37ac84f38/52_d.jpg",
            "front": "images/cube_2048/52/40db11d3ae50bf30cdc71bd37ac84f38/52_f.jpg",
            "index": 52,
            "left": "images/cube_2048/52/40db11d3ae50bf30cdc71bd37ac84f38/52_l.jpg",
            "right": "images/cube_2048/52/40db11d3ae50bf30cdc71bd37ac84f38/52_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/52/40db11d3ae50bf30cdc71bd37ac84f38/52_u.jpg"
          },
          {
            "back": "images/cube_2048/53/4dc5da84919494cdb37881791d5e08aa/53_b.jpg",
            "down": "images/cube_2048/53/4dc5da84919494cdb37881791d5e08aa/53_d.jpg",
            "front": "images/cube_2048/53/4dc5da84919494cdb37881791d5e08aa/53_f.jpg",
            "index": 53,
            "left": "images/cube_2048/53/4dc5da84919494cdb37881791d5e08aa/53_l.jpg",
            "right": "images/cube_2048/53/4dc5da84919494cdb37881791d5e08aa/53_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/53/4dc5da84919494cdb37881791d5e08aa/53_u.jpg"
          },
          {
            "back": "images/cube_2048/54/27404ef66eaceff5813b5ebade3711d2/54_b.jpg",
            "down": "images/cube_2048/54/27404ef66eaceff5813b5ebade3711d2/54_d.jpg",
            "front": "images/cube_2048/54/27404ef66eaceff5813b5ebade3711d2/54_f.jpg",
            "index": 54,
            "left": "images/cube_2048/54/27404ef66eaceff5813b5ebade3711d2/54_l.jpg",
            "right": "images/cube_2048/54/27404ef66eaceff5813b5ebade3711d2/54_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/54/27404ef66eaceff5813b5ebade3711d2/54_u.jpg"
          },
          {
            "back": "images/cube_2048/55/1e506e252f4be1680b1f316ddcb3786f/55_b.jpg",
            "down": "images/cube_2048/55/1e506e252f4be1680b1f316ddcb3786f/55_d.jpg",
            "front": "images/cube_2048/55/1e506e252f4be1680b1f316ddcb3786f/55_f.jpg",
            "index": 55,
            "left": "images/cube_2048/55/1e506e252f4be1680b1f316ddcb3786f/55_l.jpg",
            "right": "images/cube_2048/55/1e506e252f4be1680b1f316ddcb3786f/55_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/55/1e506e252f4be1680b1f316ddcb3786f/55_u.jpg"
          },
          {
            "back": "images/cube_2048/56/0644b97060ac2909ea0b4f979805b714/56_b.jpg",
            "down": "images/cube_2048/56/0644b97060ac2909ea0b4f979805b714/56_d.jpg",
            "front": "images/cube_2048/56/0644b97060ac2909ea0b4f979805b714/56_f.jpg",
            "index": 56,
            "left": "images/cube_2048/56/0644b97060ac2909ea0b4f979805b714/56_l.jpg",
            "right": "images/cube_2048/56/0644b97060ac2909ea0b4f979805b714/56_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/56/0644b97060ac2909ea0b4f979805b714/56_u.jpg"
          },
          {
            "back": "images/cube_2048/57/669586b248a62fd4801978c1c0e0f816/57_b.jpg",
            "down": "images/cube_2048/57/669586b248a62fd4801978c1c0e0f816/57_d.jpg",
            "front": "images/cube_2048/57/669586b248a62fd4801978c1c0e0f816/57_f.jpg",
            "index": 57,
            "left": "images/cube_2048/57/669586b248a62fd4801978c1c0e0f816/57_l.jpg",
            "right": "images/cube_2048/57/669586b248a62fd4801978c1c0e0f816/57_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/57/669586b248a62fd4801978c1c0e0f816/57_u.jpg"
          },
          {
            "back": "images/cube_2048/58/b444bb18d1c69763c0a3629a1aae013d/58_b.jpg",
            "down": "images/cube_2048/58/b444bb18d1c69763c0a3629a1aae013d/58_d.jpg",
            "front": "images/cube_2048/58/b444bb18d1c69763c0a3629a1aae013d/58_f.jpg",
            "index": 58,
            "left": "images/cube_2048/58/b444bb18d1c69763c0a3629a1aae013d/58_l.jpg",
            "right": "images/cube_2048/58/b444bb18d1c69763c0a3629a1aae013d/58_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/58/b444bb18d1c69763c0a3629a1aae013d/58_u.jpg"
          },
          {
            "back": "images/cube_2048/59/1b9becd66ec9c92ea46dcac01610859a/59_b.jpg",
            "down": "images/cube_2048/59/1b9becd66ec9c92ea46dcac01610859a/59_d.jpg",
            "front": "images/cube_2048/59/1b9becd66ec9c92ea46dcac01610859a/59_f.jpg",
            "index": 59,
            "left": "images/cube_2048/59/1b9becd66ec9c92ea46dcac01610859a/59_l.jpg",
            "right": "images/cube_2048/59/1b9becd66ec9c92ea46dcac01610859a/59_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/59/1b9becd66ec9c92ea46dcac01610859a/59_u.jpg"
          },
          {
            "back": "images/cube_2048/60/40509a72cf51f73540031943bec8e0fd/60_b.jpg",
            "down": "images/cube_2048/60/40509a72cf51f73540031943bec8e0fd/60_d.jpg",
            "front": "images/cube_2048/60/40509a72cf51f73540031943bec8e0fd/60_f.jpg",
            "index": 60,
            "left": "images/cube_2048/60/40509a72cf51f73540031943bec8e0fd/60_l.jpg",
            "right": "images/cube_2048/60/40509a72cf51f73540031943bec8e0fd/60_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/60/40509a72cf51f73540031943bec8e0fd/60_u.jpg"
          },
          {
            "back": "images/cube_2048/61/72e16d5105a045dd8e65cb884ab8f3a2/61_b.jpg",
            "down": "images/cube_2048/61/72e16d5105a045dd8e65cb884ab8f3a2/61_d.jpg",
            "front": "images/cube_2048/61/72e16d5105a045dd8e65cb884ab8f3a2/61_f.jpg",
            "index": 61,
            "left": "images/cube_2048/61/72e16d5105a045dd8e65cb884ab8f3a2/61_l.jpg",
            "right": "images/cube_2048/61/72e16d5105a045dd8e65cb884ab8f3a2/61_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/61/72e16d5105a045dd8e65cb884ab8f3a2/61_u.jpg"
          },
          {
            "back": "images/cube_2048/62/dd4aee6578ae79a9c5cda15eb8e55820/62_b.jpg",
            "down": "images/cube_2048/62/dd4aee6578ae79a9c5cda15eb8e55820/62_d.jpg",
            "front": "images/cube_2048/62/dd4aee6578ae79a9c5cda15eb8e55820/62_f.jpg",
            "index": 62,
            "left": "images/cube_2048/62/dd4aee6578ae79a9c5cda15eb8e55820/62_l.jpg",
            "right": "images/cube_2048/62/dd4aee6578ae79a9c5cda15eb8e55820/62_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/62/dd4aee6578ae79a9c5cda15eb8e55820/62_u.jpg"
          },
          {
            "back": "images/cube_2048/63/32db7b8f161b0ccc7346cf9e751612fc/63_b.jpg",
            "down": "images/cube_2048/63/32db7b8f161b0ccc7346cf9e751612fc/63_d.jpg",
            "front": "images/cube_2048/63/32db7b8f161b0ccc7346cf9e751612fc/63_f.jpg",
            "index": 63,
            "left": "images/cube_2048/63/32db7b8f161b0ccc7346cf9e751612fc/63_l.jpg",
            "right": "images/cube_2048/63/32db7b8f161b0ccc7346cf9e751612fc/63_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/63/32db7b8f161b0ccc7346cf9e751612fc/63_u.jpg"
          },
          {
            "back": "images/cube_2048/64/6a953ceed49c8d241b65e8ac190e1330/64_b.jpg",
            "down": "images/cube_2048/64/6a953ceed49c8d241b65e8ac190e1330/64_d.jpg",
            "front": "images/cube_2048/64/6a953ceed49c8d241b65e8ac190e1330/64_f.jpg",
            "index": 64,
            "left": "images/cube_2048/64/6a953ceed49c8d241b65e8ac190e1330/64_l.jpg",
            "right": "images/cube_2048/64/6a953ceed49c8d241b65e8ac190e1330/64_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/64/6a953ceed49c8d241b65e8ac190e1330/64_u.jpg"
          },
          {
            "back": "images/cube_2048/65/102530d97345da22ed159f908330ab57/65_b.jpg",
            "down": "images/cube_2048/65/102530d97345da22ed159f908330ab57/65_d.jpg",
            "front": "images/cube_2048/65/102530d97345da22ed159f908330ab57/65_f.jpg",
            "index": 65,
            "left": "images/cube_2048/65/102530d97345da22ed159f908330ab57/65_l.jpg",
            "right": "images/cube_2048/65/102530d97345da22ed159f908330ab57/65_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/65/102530d97345da22ed159f908330ab57/65_u.jpg"
          },
          {
            "back": "images/cube_2048/66/38420e05af7212acb8517b56dda03965/66_b.jpg",
            "down": "images/cube_2048/66/38420e05af7212acb8517b56dda03965/66_d.jpg",
            "front": "images/cube_2048/66/38420e05af7212acb8517b56dda03965/66_f.jpg",
            "index": 66,
            "left": "images/cube_2048/66/38420e05af7212acb8517b56dda03965/66_l.jpg",
            "right": "images/cube_2048/66/38420e05af7212acb8517b56dda03965/66_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/66/38420e05af7212acb8517b56dda03965/66_u.jpg"
          },
          {
            "back": "images/cube_2048/67/64b2fa0a36e2f6fd53b9c15c2ab9c7f4/67_b.jpg",
            "down": "images/cube_2048/67/64b2fa0a36e2f6fd53b9c15c2ab9c7f4/67_d.jpg",
            "front": "images/cube_2048/67/64b2fa0a36e2f6fd53b9c15c2ab9c7f4/67_f.jpg",
            "index": 67,
            "left": "images/cube_2048/67/64b2fa0a36e2f6fd53b9c15c2ab9c7f4/67_l.jpg",
            "right": "images/cube_2048/67/64b2fa0a36e2f6fd53b9c15c2ab9c7f4/67_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/67/64b2fa0a36e2f6fd53b9c15c2ab9c7f4/67_u.jpg"
          },
          {
            "back": "images/cube_2048/68/f1c169312c0aa31ceb225308fbd5e094/68_b.jpg",
            "down": "images/cube_2048/68/f1c169312c0aa31ceb225308fbd5e094/68_d.jpg",
            "front": "images/cube_2048/68/f1c169312c0aa31ceb225308fbd5e094/68_f.jpg",
            "index": 68,
            "left": "images/cube_2048/68/f1c169312c0aa31ceb225308fbd5e094/68_l.jpg",
            "right": "images/cube_2048/68/f1c169312c0aa31ceb225308fbd5e094/68_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/68/f1c169312c0aa31ceb225308fbd5e094/68_u.jpg"
          },
          {
            "back": "images/cube_2048/69/c7a33d32efad1ba9c897080121cfbc51/69_b.jpg",
            "down": "images/cube_2048/69/c7a33d32efad1ba9c897080121cfbc51/69_d.jpg",
            "front": "images/cube_2048/69/c7a33d32efad1ba9c897080121cfbc51/69_f.jpg",
            "index": 69,
            "left": "images/cube_2048/69/c7a33d32efad1ba9c897080121cfbc51/69_l.jpg",
            "right": "images/cube_2048/69/c7a33d32efad1ba9c897080121cfbc51/69_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/69/c7a33d32efad1ba9c897080121cfbc51/69_u.jpg"
          },
          {
            "back": "images/cube_2048/70/8436607315757f3727527f92a373391c/70_b.jpg",
            "down": "images/cube_2048/70/8436607315757f3727527f92a373391c/70_d.jpg",
            "front": "images/cube_2048/70/8436607315757f3727527f92a373391c/70_f.jpg",
            "index": 70,
            "left": "images/cube_2048/70/8436607315757f3727527f92a373391c/70_l.jpg",
            "right": "images/cube_2048/70/8436607315757f3727527f92a373391c/70_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/70/8436607315757f3727527f92a373391c/70_u.jpg"
          },
          {
            "back": "images/cube_2048/71/5ebc24e7d3596789f1eb4a4801900cb7/71_b.jpg",
            "down": "images/cube_2048/71/5ebc24e7d3596789f1eb4a4801900cb7/71_d.jpg",
            "front": "images/cube_2048/71/5ebc24e7d3596789f1eb4a4801900cb7/71_f.jpg",
            "index": 71,
            "left": "images/cube_2048/71/5ebc24e7d3596789f1eb4a4801900cb7/71_l.jpg",
            "right": "images/cube_2048/71/5ebc24e7d3596789f1eb4a4801900cb7/71_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/71/5ebc24e7d3596789f1eb4a4801900cb7/71_u.jpg"
          },
          {
            "back": "images/cube_2048/72/69e6fa120bb17a6fecd709cc8f9706b3/72_b.jpg",
            "down": "images/cube_2048/72/69e6fa120bb17a6fecd709cc8f9706b3/72_d.jpg",
            "front": "images/cube_2048/72/69e6fa120bb17a6fecd709cc8f9706b3/72_f.jpg",
            "index": 72,
            "left": "images/cube_2048/72/69e6fa120bb17a6fecd709cc8f9706b3/72_l.jpg",
            "right": "images/cube_2048/72/69e6fa120bb17a6fecd709cc8f9706b3/72_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/72/69e6fa120bb17a6fecd709cc8f9706b3/72_u.jpg"
          },
          {
            "back": "images/cube_2048/73/85509f803c36e48beb2c301ddf53de3a/73_b.jpg",
            "down": "images/cube_2048/73/85509f803c36e48beb2c301ddf53de3a/73_d.jpg",
            "front": "images/cube_2048/73/85509f803c36e48beb2c301ddf53de3a/73_f.jpg",
            "index": 73,
            "left": "images/cube_2048/73/85509f803c36e48beb2c301ddf53de3a/73_l.jpg",
            "right": "images/cube_2048/73/85509f803c36e48beb2c301ddf53de3a/73_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/73/85509f803c36e48beb2c301ddf53de3a/73_u.jpg"
          },
          {
            "back": "images/cube_2048/74/d0081fc3817b7a954f8e89851d6859f6/74_b.jpg",
            "down": "images/cube_2048/74/d0081fc3817b7a954f8e89851d6859f6/74_d.jpg",
            "front": "images/cube_2048/74/d0081fc3817b7a954f8e89851d6859f6/74_f.jpg",
            "index": 74,
            "left": "images/cube_2048/74/d0081fc3817b7a954f8e89851d6859f6/74_l.jpg",
            "right": "images/cube_2048/74/d0081fc3817b7a954f8e89851d6859f6/74_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/74/d0081fc3817b7a954f8e89851d6859f6/74_u.jpg"
          },
          {
            "back": "images/cube_2048/75/2241c58d1b3e399193a91c83c3186f80/75_b.jpg",
            "down": "images/cube_2048/75/2241c58d1b3e399193a91c83c3186f80/75_d.jpg",
            "front": "images/cube_2048/75/2241c58d1b3e399193a91c83c3186f80/75_f.jpg",
            "index": 75,
            "left": "images/cube_2048/75/2241c58d1b3e399193a91c83c3186f80/75_l.jpg",
            "right": "images/cube_2048/75/2241c58d1b3e399193a91c83c3186f80/75_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/75/2241c58d1b3e399193a91c83c3186f80/75_u.jpg"
          },
          {
            "back": "images/cube_2048/76/59cda3e68b866e3c66fecdc49b2aa2e8/76_b.jpg",
            "down": "images/cube_2048/76/59cda3e68b866e3c66fecdc49b2aa2e8/76_d.jpg",
            "front": "images/cube_2048/76/59cda3e68b866e3c66fecdc49b2aa2e8/76_f.jpg",
            "index": 76,
            "left": "images/cube_2048/76/59cda3e68b866e3c66fecdc49b2aa2e8/76_l.jpg",
            "right": "images/cube_2048/76/59cda3e68b866e3c66fecdc49b2aa2e8/76_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/76/59cda3e68b866e3c66fecdc49b2aa2e8/76_u.jpg"
          },
          {
            "back": "images/cube_2048/77/78ff38baa39544f89a8a3e5bcf05fadf/77_b.jpg",
            "down": "images/cube_2048/77/78ff38baa39544f89a8a3e5bcf05fadf/77_d.jpg",
            "front": "images/cube_2048/77/78ff38baa39544f89a8a3e5bcf05fadf/77_f.jpg",
            "index": 77,
            "left": "images/cube_2048/77/78ff38baa39544f89a8a3e5bcf05fadf/77_l.jpg",
            "right": "images/cube_2048/77/78ff38baa39544f89a8a3e5bcf05fadf/77_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/77/78ff38baa39544f89a8a3e5bcf05fadf/77_u.jpg"
          },
          {
            "back": "images/cube_2048/78/e2d613a1515238dd2015364d25119748/78_b.jpg",
            "down": "images/cube_2048/78/e2d613a1515238dd2015364d25119748/78_d.jpg",
            "front": "images/cube_2048/78/e2d613a1515238dd2015364d25119748/78_f.jpg",
            "index": 78,
            "left": "images/cube_2048/78/e2d613a1515238dd2015364d25119748/78_l.jpg",
            "right": "images/cube_2048/78/e2d613a1515238dd2015364d25119748/78_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/78/e2d613a1515238dd2015364d25119748/78_u.jpg"
          },
          {
            "back": "images/cube_2048/79/5ffaf435755bef625f968c55771f9d53/79_b.jpg",
            "down": "images/cube_2048/79/5ffaf435755bef625f968c55771f9d53/79_d.jpg",
            "front": "images/cube_2048/79/5ffaf435755bef625f968c55771f9d53/79_f.jpg",
            "index": 79,
            "left": "images/cube_2048/79/5ffaf435755bef625f968c55771f9d53/79_l.jpg",
            "right": "images/cube_2048/79/5ffaf435755bef625f968c55771f9d53/79_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/79/5ffaf435755bef625f968c55771f9d53/79_u.jpg"
          },
          {
            "back": "images/cube_2048/80/1db074322b5587be63eb6bb8fd36dd24/80_b.jpg",
            "down": "images/cube_2048/80/1db074322b5587be63eb6bb8fd36dd24/80_d.jpg",
            "front": "images/cube_2048/80/1db074322b5587be63eb6bb8fd36dd24/80_f.jpg",
            "index": 80,
            "left": "images/cube_2048/80/1db074322b5587be63eb6bb8fd36dd24/80_l.jpg",
            "right": "images/cube_2048/80/1db074322b5587be63eb6bb8fd36dd24/80_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/80/1db074322b5587be63eb6bb8fd36dd24/80_u.jpg"
          },
          {
            "back": "images/cube_2048/81/e1feabe238f08d57491eeead661f4cba/81_b.jpg",
            "down": "images/cube_2048/81/e1feabe238f08d57491eeead661f4cba/81_d.jpg",
            "front": "images/cube_2048/81/e1feabe238f08d57491eeead661f4cba/81_f.jpg",
            "index": 81,
            "left": "images/cube_2048/81/e1feabe238f08d57491eeead661f4cba/81_l.jpg",
            "right": "images/cube_2048/81/e1feabe238f08d57491eeead661f4cba/81_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/81/e1feabe238f08d57491eeead661f4cba/81_u.jpg"
          },
          {
            "back": "images/cube_2048/82/931befc343002f9b9574017d694ab96a/82_b.jpg",
            "down": "images/cube_2048/82/931befc343002f9b9574017d694ab96a/82_d.jpg",
            "front": "images/cube_2048/82/931befc343002f9b9574017d694ab96a/82_f.jpg",
            "index": 82,
            "left": "images/cube_2048/82/931befc343002f9b9574017d694ab96a/82_l.jpg",
            "right": "images/cube_2048/82/931befc343002f9b9574017d694ab96a/82_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/82/931befc343002f9b9574017d694ab96a/82_u.jpg"
          },
          {
            "back": "images/cube_2048/83/87e07a5939578f9c48f303e1d3346fa1/83_b.jpg",
            "down": "images/cube_2048/83/87e07a5939578f9c48f303e1d3346fa1/83_d.jpg",
            "front": "images/cube_2048/83/87e07a5939578f9c48f303e1d3346fa1/83_f.jpg",
            "index": 83,
            "left": "images/cube_2048/83/87e07a5939578f9c48f303e1d3346fa1/83_l.jpg",
            "right": "images/cube_2048/83/87e07a5939578f9c48f303e1d3346fa1/83_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/83/87e07a5939578f9c48f303e1d3346fa1/83_u.jpg"
          },
          {
            "back": "images/cube_2048/84/935476aa0fdc962edbdb79492f7c772c/84_b.jpg",
            "down": "images/cube_2048/84/935476aa0fdc962edbdb79492f7c772c/84_d.jpg",
            "front": "images/cube_2048/84/935476aa0fdc962edbdb79492f7c772c/84_f.jpg",
            "index": 84,
            "left": "images/cube_2048/84/935476aa0fdc962edbdb79492f7c772c/84_l.jpg",
            "right": "images/cube_2048/84/935476aa0fdc962edbdb79492f7c772c/84_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/84/935476aa0fdc962edbdb79492f7c772c/84_u.jpg"
          },
          {
            "back": "images/cube_2048/85/9839be7260636abd8dddf48e48645646/85_b.jpg",
            "down": "images/cube_2048/85/9839be7260636abd8dddf48e48645646/85_d.jpg",
            "front": "images/cube_2048/85/9839be7260636abd8dddf48e48645646/85_f.jpg",
            "index": 85,
            "left": "images/cube_2048/85/9839be7260636abd8dddf48e48645646/85_l.jpg",
            "right": "images/cube_2048/85/9839be7260636abd8dddf48e48645646/85_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/85/9839be7260636abd8dddf48e48645646/85_u.jpg"
          },
          {
            "back": "images/cube_2048/86/8d5ff1914ea9d79a034925fddb3e42a9/86_b.jpg",
            "down": "images/cube_2048/86/8d5ff1914ea9d79a034925fddb3e42a9/86_d.jpg",
            "front": "images/cube_2048/86/8d5ff1914ea9d79a034925fddb3e42a9/86_f.jpg",
            "index": 86,
            "left": "images/cube_2048/86/8d5ff1914ea9d79a034925fddb3e42a9/86_l.jpg",
            "right": "images/cube_2048/86/8d5ff1914ea9d79a034925fddb3e42a9/86_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/86/8d5ff1914ea9d79a034925fddb3e42a9/86_u.jpg"
          },
          {
            "back": "images/cube_2048/87/c72f6de1d0e064b3dbc29e9030d29bf3/87_b.jpg",
            "down": "images/cube_2048/87/c72f6de1d0e064b3dbc29e9030d29bf3/87_d.jpg",
            "front": "images/cube_2048/87/c72f6de1d0e064b3dbc29e9030d29bf3/87_f.jpg",
            "index": 87,
            "left": "images/cube_2048/87/c72f6de1d0e064b3dbc29e9030d29bf3/87_l.jpg",
            "right": "images/cube_2048/87/c72f6de1d0e064b3dbc29e9030d29bf3/87_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/87/c72f6de1d0e064b3dbc29e9030d29bf3/87_u.jpg"
          },
          {
            "back": "images/cube_2048/88/e086149cecde5897fed530614f48d2ca/88_b.jpg",
            "down": "images/cube_2048/88/e086149cecde5897fed530614f48d2ca/88_d.jpg",
            "front": "images/cube_2048/88/e086149cecde5897fed530614f48d2ca/88_f.jpg",
            "index": 88,
            "left": "images/cube_2048/88/e086149cecde5897fed530614f48d2ca/88_l.jpg",
            "right": "images/cube_2048/88/e086149cecde5897fed530614f48d2ca/88_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/88/e086149cecde5897fed530614f48d2ca/88_u.jpg"
          },
          {
            "back": "images/cube_2048/89/8373ec1121cfca49c77e2a4ca6d14ea6/89_b.jpg",
            "down": "images/cube_2048/89/8373ec1121cfca49c77e2a4ca6d14ea6/89_d.jpg",
            "front": "images/cube_2048/89/8373ec1121cfca49c77e2a4ca6d14ea6/89_f.jpg",
            "index": 89,
            "left": "images/cube_2048/89/8373ec1121cfca49c77e2a4ca6d14ea6/89_l.jpg",
            "right": "images/cube_2048/89/8373ec1121cfca49c77e2a4ca6d14ea6/89_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/89/8373ec1121cfca49c77e2a4ca6d14ea6/89_u.jpg"
          },
          {
            "back": "images/cube_2048/90/9ccd89c35cb44844d3af4b61eecef412/90_b.jpg",
            "down": "images/cube_2048/90/9ccd89c35cb44844d3af4b61eecef412/90_d.jpg",
            "front": "images/cube_2048/90/9ccd89c35cb44844d3af4b61eecef412/90_f.jpg",
            "index": 90,
            "left": "images/cube_2048/90/9ccd89c35cb44844d3af4b61eecef412/90_l.jpg",
            "right": "images/cube_2048/90/9ccd89c35cb44844d3af4b61eecef412/90_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/90/9ccd89c35cb44844d3af4b61eecef412/90_u.jpg"
          },
          {
            "back": "images/cube_2048/91/5a5e95f97750dfa43a7bb0b00f4e31c6/91_b.jpg",
            "down": "images/cube_2048/91/5a5e95f97750dfa43a7bb0b00f4e31c6/91_d.jpg",
            "front": "images/cube_2048/91/5a5e95f97750dfa43a7bb0b00f4e31c6/91_f.jpg",
            "index": 91,
            "left": "images/cube_2048/91/5a5e95f97750dfa43a7bb0b00f4e31c6/91_l.jpg",
            "right": "images/cube_2048/91/5a5e95f97750dfa43a7bb0b00f4e31c6/91_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/91/5a5e95f97750dfa43a7bb0b00f4e31c6/91_u.jpg"
          },
          {
            "back": "images/cube_2048/92/157e9e4e3c669fa0e0d91e569488b999/92_b.jpg",
            "down": "images/cube_2048/92/157e9e4e3c669fa0e0d91e569488b999/92_d.jpg",
            "front": "images/cube_2048/92/157e9e4e3c669fa0e0d91e569488b999/92_f.jpg",
            "index": 92,
            "left": "images/cube_2048/92/157e9e4e3c669fa0e0d91e569488b999/92_l.jpg",
            "right": "images/cube_2048/92/157e9e4e3c669fa0e0d91e569488b999/92_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/92/157e9e4e3c669fa0e0d91e569488b999/92_u.jpg"
          },
          {
            "back": "images/cube_2048/93/f743ab3a02287a1fba1944eb00506a81/93_b.jpg",
            "down": "images/cube_2048/93/f743ab3a02287a1fba1944eb00506a81/93_d.jpg",
            "front": "images/cube_2048/93/f743ab3a02287a1fba1944eb00506a81/93_f.jpg",
            "index": 93,
            "left": "images/cube_2048/93/f743ab3a02287a1fba1944eb00506a81/93_l.jpg",
            "right": "images/cube_2048/93/f743ab3a02287a1fba1944eb00506a81/93_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/93/f743ab3a02287a1fba1944eb00506a81/93_u.jpg"
          },
          {
            "back": "images/cube_2048/94/4b84bc1d49ad2613013dce6f77c492a4/94_b.jpg",
            "down": "images/cube_2048/94/4b84bc1d49ad2613013dce6f77c492a4/94_d.jpg",
            "front": "images/cube_2048/94/4b84bc1d49ad2613013dce6f77c492a4/94_f.jpg",
            "index": 94,
            "left": "images/cube_2048/94/4b84bc1d49ad2613013dce6f77c492a4/94_l.jpg",
            "right": "images/cube_2048/94/4b84bc1d49ad2613013dce6f77c492a4/94_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/94/4b84bc1d49ad2613013dce6f77c492a4/94_u.jpg"
          },
          {
            "back": "images/cube_2048/95/52cb3b889f05742a7756b8d380972f98/95_b.jpg",
            "down": "images/cube_2048/95/52cb3b889f05742a7756b8d380972f98/95_d.jpg",
            "front": "images/cube_2048/95/52cb3b889f05742a7756b8d380972f98/95_f.jpg",
            "index": 95,
            "left": "images/cube_2048/95/52cb3b889f05742a7756b8d380972f98/95_l.jpg",
            "right": "images/cube_2048/95/52cb3b889f05742a7756b8d380972f98/95_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/95/52cb3b889f05742a7756b8d380972f98/95_u.jpg"
          },
          {
            "back": "images/cube_2048/96/1fad34394d0c2643d59df57b163d523e/96_b.jpg",
            "down": "images/cube_2048/96/1fad34394d0c2643d59df57b163d523e/96_d.jpg",
            "front": "images/cube_2048/96/1fad34394d0c2643d59df57b163d523e/96_f.jpg",
            "index": 96,
            "left": "images/cube_2048/96/1fad34394d0c2643d59df57b163d523e/96_l.jpg",
            "right": "images/cube_2048/96/1fad34394d0c2643d59df57b163d523e/96_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/96/1fad34394d0c2643d59df57b163d523e/96_u.jpg"
          },
          {
            "back": "images/cube_2048/97/63179e794a7376fcee202375bd889403/97_b.jpg",
            "down": "images/cube_2048/97/63179e794a7376fcee202375bd889403/97_d.jpg",
            "front": "images/cube_2048/97/63179e794a7376fcee202375bd889403/97_f.jpg",
            "index": 97,
            "left": "images/cube_2048/97/63179e794a7376fcee202375bd889403/97_l.jpg",
            "right": "images/cube_2048/97/63179e794a7376fcee202375bd889403/97_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/97/63179e794a7376fcee202375bd889403/97_u.jpg"
          },
          {
            "back": "images/cube_2048/98/7a633bef95d7aec489389b3a4b2f40ef/98_b.jpg",
            "down": "images/cube_2048/98/7a633bef95d7aec489389b3a4b2f40ef/98_d.jpg",
            "front": "images/cube_2048/98/7a633bef95d7aec489389b3a4b2f40ef/98_f.jpg",
            "index": 98,
            "left": "images/cube_2048/98/7a633bef95d7aec489389b3a4b2f40ef/98_l.jpg",
            "right": "images/cube_2048/98/7a633bef95d7aec489389b3a4b2f40ef/98_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/98/7a633bef95d7aec489389b3a4b2f40ef/98_u.jpg"
          },
          {
            "back": "images/cube_2048/99/d685b7be49b7eb60bcffc8bad450142f/99_b.jpg",
            "down": "images/cube_2048/99/d685b7be49b7eb60bcffc8bad450142f/99_d.jpg",
            "front": "images/cube_2048/99/d685b7be49b7eb60bcffc8bad450142f/99_f.jpg",
            "index": 99,
            "left": "images/cube_2048/99/d685b7be49b7eb60bcffc8bad450142f/99_l.jpg",
            "right": "images/cube_2048/99/d685b7be49b7eb60bcffc8bad450142f/99_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/99/d685b7be49b7eb60bcffc8bad450142f/99_u.jpg"
          },
          {
            "back": "images/cube_2048/100/6b0c0f337a3a5085f66d0e238df56900/100_b.jpg",
            "down": "images/cube_2048/100/6b0c0f337a3a5085f66d0e238df56900/100_d.jpg",
            "front": "images/cube_2048/100/6b0c0f337a3a5085f66d0e238df56900/100_f.jpg",
            "index": 100,
            "left": "images/cube_2048/100/6b0c0f337a3a5085f66d0e238df56900/100_l.jpg",
            "right": "images/cube_2048/100/6b0c0f337a3a5085f66d0e238df56900/100_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/100/6b0c0f337a3a5085f66d0e238df56900/100_u.jpg"
          },
          {
            "back": "images/cube_2048/101/57e432bbcfb78573950aee74ebc039f1/101_b.jpg",
            "down": "images/cube_2048/101/57e432bbcfb78573950aee74ebc039f1/101_d.jpg",
            "front": "images/cube_2048/101/57e432bbcfb78573950aee74ebc039f1/101_f.jpg",
            "index": 101,
            "left": "images/cube_2048/101/57e432bbcfb78573950aee74ebc039f1/101_l.jpg",
            "right": "images/cube_2048/101/57e432bbcfb78573950aee74ebc039f1/101_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/101/57e432bbcfb78573950aee74ebc039f1/101_u.jpg"
          },
          {
            "back": "images/cube_2048/102/486077a8d18a3d67a0fd22938b945585/102_b.jpg",
            "down": "images/cube_2048/102/486077a8d18a3d67a0fd22938b945585/102_d.jpg",
            "front": "images/cube_2048/102/486077a8d18a3d67a0fd22938b945585/102_f.jpg",
            "index": 102,
            "left": "images/cube_2048/102/486077a8d18a3d67a0fd22938b945585/102_l.jpg",
            "right": "images/cube_2048/102/486077a8d18a3d67a0fd22938b945585/102_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/102/486077a8d18a3d67a0fd22938b945585/102_u.jpg"
          },
          {
            "back": "images/cube_2048/103/ce09085e9c1a78467a14e9471f847a34/103_b.jpg",
            "down": "images/cube_2048/103/ce09085e9c1a78467a14e9471f847a34/103_d.jpg",
            "front": "images/cube_2048/103/ce09085e9c1a78467a14e9471f847a34/103_f.jpg",
            "index": 103,
            "left": "images/cube_2048/103/ce09085e9c1a78467a14e9471f847a34/103_l.jpg",
            "right": "images/cube_2048/103/ce09085e9c1a78467a14e9471f847a34/103_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/103/ce09085e9c1a78467a14e9471f847a34/103_u.jpg"
          },
          {
            "back": "images/cube_2048/104/d149edd489b1a838daa0f5fc1439b23a/104_b.jpg",
            "down": "images/cube_2048/104/d149edd489b1a838daa0f5fc1439b23a/104_d.jpg",
            "front": "images/cube_2048/104/d149edd489b1a838daa0f5fc1439b23a/104_f.jpg",
            "index": 104,
            "left": "images/cube_2048/104/d149edd489b1a838daa0f5fc1439b23a/104_l.jpg",
            "right": "images/cube_2048/104/d149edd489b1a838daa0f5fc1439b23a/104_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/104/d149edd489b1a838daa0f5fc1439b23a/104_u.jpg"
          },
          {
            "back": "images/cube_2048/105/128f70157178218169f9669a9f78fbd5/105_b.jpg",
            "down": "images/cube_2048/105/128f70157178218169f9669a9f78fbd5/105_d.jpg",
            "front": "images/cube_2048/105/128f70157178218169f9669a9f78fbd5/105_f.jpg",
            "index": 105,
            "left": "images/cube_2048/105/128f70157178218169f9669a9f78fbd5/105_l.jpg",
            "right": "images/cube_2048/105/128f70157178218169f9669a9f78fbd5/105_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/105/128f70157178218169f9669a9f78fbd5/105_u.jpg"
          },
          {
            "back": "images/cube_2048/106/791201ae5277790f8b6d4bee94ee10f4/106_b.jpg",
            "down": "images/cube_2048/106/791201ae5277790f8b6d4bee94ee10f4/106_d.jpg",
            "front": "images/cube_2048/106/791201ae5277790f8b6d4bee94ee10f4/106_f.jpg",
            "index": 106,
            "left": "images/cube_2048/106/791201ae5277790f8b6d4bee94ee10f4/106_l.jpg",
            "right": "images/cube_2048/106/791201ae5277790f8b6d4bee94ee10f4/106_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/106/791201ae5277790f8b6d4bee94ee10f4/106_u.jpg"
          },
          {
            "back": "images/cube_2048/107/95644c791f9ea217c907ab23678b4551/107_b.jpg",
            "down": "images/cube_2048/107/95644c791f9ea217c907ab23678b4551/107_d.jpg",
            "front": "images/cube_2048/107/95644c791f9ea217c907ab23678b4551/107_f.jpg",
            "index": 107,
            "left": "images/cube_2048/107/95644c791f9ea217c907ab23678b4551/107_l.jpg",
            "right": "images/cube_2048/107/95644c791f9ea217c907ab23678b4551/107_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/107/95644c791f9ea217c907ab23678b4551/107_u.jpg"
          },
          {
            "back": "images/cube_2048/108/eafc4487e1d49b46a33c9727e01a5e23/108_b.jpg",
            "down": "images/cube_2048/108/eafc4487e1d49b46a33c9727e01a5e23/108_d.jpg",
            "front": "images/cube_2048/108/eafc4487e1d49b46a33c9727e01a5e23/108_f.jpg",
            "index": 108,
            "left": "images/cube_2048/108/eafc4487e1d49b46a33c9727e01a5e23/108_l.jpg",
            "right": "images/cube_2048/108/eafc4487e1d49b46a33c9727e01a5e23/108_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/108/eafc4487e1d49b46a33c9727e01a5e23/108_u.jpg"
          },
          {
            "back": "images/cube_2048/109/fa69a3f3d26c1b766714b0e69340c018/109_b.jpg",
            "down": "images/cube_2048/109/fa69a3f3d26c1b766714b0e69340c018/109_d.jpg",
            "front": "images/cube_2048/109/fa69a3f3d26c1b766714b0e69340c018/109_f.jpg",
            "index": 109,
            "left": "images/cube_2048/109/fa69a3f3d26c1b766714b0e69340c018/109_l.jpg",
            "right": "images/cube_2048/109/fa69a3f3d26c1b766714b0e69340c018/109_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/109/fa69a3f3d26c1b766714b0e69340c018/109_u.jpg"
          },
          {
            "back": "images/cube_2048/110/c0e6ffdd2fc1c6521572e01f124694de/110_b.jpg",
            "down": "images/cube_2048/110/c0e6ffdd2fc1c6521572e01f124694de/110_d.jpg",
            "front": "images/cube_2048/110/c0e6ffdd2fc1c6521572e01f124694de/110_f.jpg",
            "index": 110,
            "left": "images/cube_2048/110/c0e6ffdd2fc1c6521572e01f124694de/110_l.jpg",
            "right": "images/cube_2048/110/c0e6ffdd2fc1c6521572e01f124694de/110_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/110/c0e6ffdd2fc1c6521572e01f124694de/110_u.jpg"
          },
          {
            "back": "images/cube_2048/111/7570a0825ee28bc45cabc3543cf9b25d/111_b.jpg",
            "down": "images/cube_2048/111/7570a0825ee28bc45cabc3543cf9b25d/111_d.jpg",
            "front": "images/cube_2048/111/7570a0825ee28bc45cabc3543cf9b25d/111_f.jpg",
            "index": 111,
            "left": "images/cube_2048/111/7570a0825ee28bc45cabc3543cf9b25d/111_l.jpg",
            "right": "images/cube_2048/111/7570a0825ee28bc45cabc3543cf9b25d/111_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/111/7570a0825ee28bc45cabc3543cf9b25d/111_u.jpg"
          },
          {
            "back": "images/cube_2048/112/c09fb29021cf182d7559554defd72131/112_b.jpg",
            "down": "images/cube_2048/112/c09fb29021cf182d7559554defd72131/112_d.jpg",
            "front": "images/cube_2048/112/c09fb29021cf182d7559554defd72131/112_f.jpg",
            "index": 112,
            "left": "images/cube_2048/112/c09fb29021cf182d7559554defd72131/112_l.jpg",
            "right": "images/cube_2048/112/c09fb29021cf182d7559554defd72131/112_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/112/c09fb29021cf182d7559554defd72131/112_u.jpg"
          },
          {
            "back": "images/cube_2048/113/5b7e6e93391a546e0b40add513774e78/113_b.jpg",
            "down": "images/cube_2048/113/5b7e6e93391a546e0b40add513774e78/113_d.jpg",
            "front": "images/cube_2048/113/5b7e6e93391a546e0b40add513774e78/113_f.jpg",
            "index": 113,
            "left": "images/cube_2048/113/5b7e6e93391a546e0b40add513774e78/113_l.jpg",
            "right": "images/cube_2048/113/5b7e6e93391a546e0b40add513774e78/113_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/113/5b7e6e93391a546e0b40add513774e78/113_u.jpg"
          },
          {
            "back": "images/cube_2048/114/42b7bc76d861c2858ccf38be236fc09d/114_b.jpg",
            "down": "images/cube_2048/114/42b7bc76d861c2858ccf38be236fc09d/114_d.jpg",
            "front": "images/cube_2048/114/42b7bc76d861c2858ccf38be236fc09d/114_f.jpg",
            "index": 114,
            "left": "images/cube_2048/114/42b7bc76d861c2858ccf38be236fc09d/114_l.jpg",
            "right": "images/cube_2048/114/42b7bc76d861c2858ccf38be236fc09d/114_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/114/42b7bc76d861c2858ccf38be236fc09d/114_u.jpg"
          },
          {
            "back": "images/cube_2048/115/25dda2fecb68295ca79315fb8b69ecf3/115_b.jpg",
            "down": "images/cube_2048/115/25dda2fecb68295ca79315fb8b69ecf3/115_d.jpg",
            "front": "images/cube_2048/115/25dda2fecb68295ca79315fb8b69ecf3/115_f.jpg",
            "index": 115,
            "left": "images/cube_2048/115/25dda2fecb68295ca79315fb8b69ecf3/115_l.jpg",
            "right": "images/cube_2048/115/25dda2fecb68295ca79315fb8b69ecf3/115_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/115/25dda2fecb68295ca79315fb8b69ecf3/115_u.jpg"
          },
          {
            "back": "images/cube_2048/116/0593047ecd59a9b26e4a2c9ff3c28c7c/116_b.jpg",
            "down": "images/cube_2048/116/0593047ecd59a9b26e4a2c9ff3c28c7c/116_d.jpg",
            "front": "images/cube_2048/116/0593047ecd59a9b26e4a2c9ff3c28c7c/116_f.jpg",
            "index": 116,
            "left": "images/cube_2048/116/0593047ecd59a9b26e4a2c9ff3c28c7c/116_l.jpg",
            "right": "images/cube_2048/116/0593047ecd59a9b26e4a2c9ff3c28c7c/116_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/116/0593047ecd59a9b26e4a2c9ff3c28c7c/116_u.jpg"
          },
          {
            "back": "images/cube_2048/117/20bc28b87cd61ec28da195a97d384c8f/117_b.jpg",
            "down": "images/cube_2048/117/20bc28b87cd61ec28da195a97d384c8f/117_d.jpg",
            "front": "images/cube_2048/117/20bc28b87cd61ec28da195a97d384c8f/117_f.jpg",
            "index": 117,
            "left": "images/cube_2048/117/20bc28b87cd61ec28da195a97d384c8f/117_l.jpg",
            "right": "images/cube_2048/117/20bc28b87cd61ec28da195a97d384c8f/117_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/117/20bc28b87cd61ec28da195a97d384c8f/117_u.jpg"
          },
          {
            "back": "images/cube_2048/118/c3e7c2cd4f41e7de660fcde860d1d272/118_b.jpg",
            "down": "images/cube_2048/118/c3e7c2cd4f41e7de660fcde860d1d272/118_d.jpg",
            "front": "images/cube_2048/118/c3e7c2cd4f41e7de660fcde860d1d272/118_f.jpg",
            "index": 118,
            "left": "images/cube_2048/118/c3e7c2cd4f41e7de660fcde860d1d272/118_l.jpg",
            "right": "images/cube_2048/118/c3e7c2cd4f41e7de660fcde860d1d272/118_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/118/c3e7c2cd4f41e7de660fcde860d1d272/118_u.jpg"
          },
          {
            "back": "images/cube_2048/119/9ca65cc13b67780227830d1fd5867069/119_b.jpg",
            "down": "images/cube_2048/119/9ca65cc13b67780227830d1fd5867069/119_d.jpg",
            "front": "images/cube_2048/119/9ca65cc13b67780227830d1fd5867069/119_f.jpg",
            "index": 119,
            "left": "images/cube_2048/119/9ca65cc13b67780227830d1fd5867069/119_l.jpg",
            "right": "images/cube_2048/119/9ca65cc13b67780227830d1fd5867069/119_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/119/9ca65cc13b67780227830d1fd5867069/119_u.jpg"
          },
          {
            "back": "images/cube_2048/120/583424a766f8f0db9e04b9edf2c2dfd6/120_b.jpg",
            "down": "images/cube_2048/120/583424a766f8f0db9e04b9edf2c2dfd6/120_d.jpg",
            "front": "images/cube_2048/120/583424a766f8f0db9e04b9edf2c2dfd6/120_f.jpg",
            "index": 120,
            "left": "images/cube_2048/120/583424a766f8f0db9e04b9edf2c2dfd6/120_l.jpg",
            "right": "images/cube_2048/120/583424a766f8f0db9e04b9edf2c2dfd6/120_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/120/583424a766f8f0db9e04b9edf2c2dfd6/120_u.jpg"
          },
          {
            "back": "images/cube_2048/121/951ec8761bba753002f7c2658a6d6adf/121_b.jpg",
            "down": "images/cube_2048/121/951ec8761bba753002f7c2658a6d6adf/121_d.jpg",
            "front": "images/cube_2048/121/951ec8761bba753002f7c2658a6d6adf/121_f.jpg",
            "index": 121,
            "left": "images/cube_2048/121/951ec8761bba753002f7c2658a6d6adf/121_l.jpg",
            "right": "images/cube_2048/121/951ec8761bba753002f7c2658a6d6adf/121_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/121/951ec8761bba753002f7c2658a6d6adf/121_u.jpg"
          },
          {
            "back": "images/cube_2048/122/68c4e56ebfb3be8819e3a0ae118b35a4/122_b.jpg",
            "down": "images/cube_2048/122/68c4e56ebfb3be8819e3a0ae118b35a4/122_d.jpg",
            "front": "images/cube_2048/122/68c4e56ebfb3be8819e3a0ae118b35a4/122_f.jpg",
            "index": 122,
            "left": "images/cube_2048/122/68c4e56ebfb3be8819e3a0ae118b35a4/122_l.jpg",
            "right": "images/cube_2048/122/68c4e56ebfb3be8819e3a0ae118b35a4/122_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/122/68c4e56ebfb3be8819e3a0ae118b35a4/122_u.jpg"
          },
          {
            "back": "images/cube_2048/123/678c86790cda1c1d668ad7eca303e0c1/123_b.jpg",
            "down": "images/cube_2048/123/678c86790cda1c1d668ad7eca303e0c1/123_d.jpg",
            "front": "images/cube_2048/123/678c86790cda1c1d668ad7eca303e0c1/123_f.jpg",
            "index": 123,
            "left": "images/cube_2048/123/678c86790cda1c1d668ad7eca303e0c1/123_l.jpg",
            "right": "images/cube_2048/123/678c86790cda1c1d668ad7eca303e0c1/123_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/123/678c86790cda1c1d668ad7eca303e0c1/123_u.jpg"
          },
          {
            "back": "images/cube_2048/124/e5e40b923629992c5f9263342ccc003b/124_b.jpg",
            "down": "images/cube_2048/124/e5e40b923629992c5f9263342ccc003b/124_d.jpg",
            "front": "images/cube_2048/124/e5e40b923629992c5f9263342ccc003b/124_f.jpg",
            "index": 124,
            "left": "images/cube_2048/124/e5e40b923629992c5f9263342ccc003b/124_l.jpg",
            "right": "images/cube_2048/124/e5e40b923629992c5f9263342ccc003b/124_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/124/e5e40b923629992c5f9263342ccc003b/124_u.jpg"
          },
          {
            "back": "images/cube_2048/125/355b3503eecfb98afa26aabc28282b87/125_b.jpg",
            "down": "images/cube_2048/125/355b3503eecfb98afa26aabc28282b87/125_d.jpg",
            "front": "images/cube_2048/125/355b3503eecfb98afa26aabc28282b87/125_f.jpg",
            "index": 125,
            "left": "images/cube_2048/125/355b3503eecfb98afa26aabc28282b87/125_l.jpg",
            "right": "images/cube_2048/125/355b3503eecfb98afa26aabc28282b87/125_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/125/355b3503eecfb98afa26aabc28282b87/125_u.jpg"
          },
          {
            "back": "images/cube_2048/126/bb1ed0184ee58ef22723baa7a4b2dc8e/126_b.jpg",
            "down": "images/cube_2048/126/bb1ed0184ee58ef22723baa7a4b2dc8e/126_d.jpg",
            "front": "images/cube_2048/126/bb1ed0184ee58ef22723baa7a4b2dc8e/126_f.jpg",
            "index": 126,
            "left": "images/cube_2048/126/bb1ed0184ee58ef22723baa7a4b2dc8e/126_l.jpg",
            "right": "images/cube_2048/126/bb1ed0184ee58ef22723baa7a4b2dc8e/126_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/126/bb1ed0184ee58ef22723baa7a4b2dc8e/126_u.jpg"
          },
          {
            "back": "images/cube_2048/127/0463c9400a08b3651e57fc59b0380617/127_b.jpg",
            "down": "images/cube_2048/127/0463c9400a08b3651e57fc59b0380617/127_d.jpg",
            "front": "images/cube_2048/127/0463c9400a08b3651e57fc59b0380617/127_f.jpg",
            "index": 127,
            "left": "images/cube_2048/127/0463c9400a08b3651e57fc59b0380617/127_l.jpg",
            "right": "images/cube_2048/127/0463c9400a08b3651e57fc59b0380617/127_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/127/0463c9400a08b3651e57fc59b0380617/127_u.jpg"
          },
          {
            "back": "images/cube_2048/128/4cc96983b1f7ea18f9f31c2082fc3559/128_b.jpg",
            "down": "images/cube_2048/128/4cc96983b1f7ea18f9f31c2082fc3559/128_d.jpg",
            "front": "images/cube_2048/128/4cc96983b1f7ea18f9f31c2082fc3559/128_f.jpg",
            "index": 128,
            "left": "images/cube_2048/128/4cc96983b1f7ea18f9f31c2082fc3559/128_l.jpg",
            "right": "images/cube_2048/128/4cc96983b1f7ea18f9f31c2082fc3559/128_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/128/4cc96983b1f7ea18f9f31c2082fc3559/128_u.jpg"
          },
          {
            "back": "images/cube_2048/129/232695708c94c8cb7caa61d6b430446c/129_b.jpg",
            "down": "images/cube_2048/129/232695708c94c8cb7caa61d6b430446c/129_d.jpg",
            "front": "images/cube_2048/129/232695708c94c8cb7caa61d6b430446c/129_f.jpg",
            "index": 129,
            "left": "images/cube_2048/129/232695708c94c8cb7caa61d6b430446c/129_l.jpg",
            "right": "images/cube_2048/129/232695708c94c8cb7caa61d6b430446c/129_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/129/232695708c94c8cb7caa61d6b430446c/129_u.jpg"
          },
          {
            "back": "images/cube_2048/130/f98fb61cce0ea8fa52b83d9eebdcbff2/130_b.jpg",
            "down": "images/cube_2048/130/f98fb61cce0ea8fa52b83d9eebdcbff2/130_d.jpg",
            "front": "images/cube_2048/130/f98fb61cce0ea8fa52b83d9eebdcbff2/130_f.jpg",
            "index": 130,
            "left": "images/cube_2048/130/f98fb61cce0ea8fa52b83d9eebdcbff2/130_l.jpg",
            "right": "images/cube_2048/130/f98fb61cce0ea8fa52b83d9eebdcbff2/130_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/130/f98fb61cce0ea8fa52b83d9eebdcbff2/130_u.jpg"
          },
          {
            "back": "images/cube_2048/131/acb03ad6fc343e8f9cb6d07c0f92d24b/131_b.jpg",
            "down": "images/cube_2048/131/acb03ad6fc343e8f9cb6d07c0f92d24b/131_d.jpg",
            "front": "images/cube_2048/131/acb03ad6fc343e8f9cb6d07c0f92d24b/131_f.jpg",
            "index": 131,
            "left": "images/cube_2048/131/acb03ad6fc343e8f9cb6d07c0f92d24b/131_l.jpg",
            "right": "images/cube_2048/131/acb03ad6fc343e8f9cb6d07c0f92d24b/131_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/131/acb03ad6fc343e8f9cb6d07c0f92d24b/131_u.jpg"
          },
          {
            "back": "images/cube_2048/132/55dbd1601bca88d96e987e65cd7c4afa/132_b.jpg",
            "down": "images/cube_2048/132/55dbd1601bca88d96e987e65cd7c4afa/132_d.jpg",
            "front": "images/cube_2048/132/55dbd1601bca88d96e987e65cd7c4afa/132_f.jpg",
            "index": 132,
            "left": "images/cube_2048/132/55dbd1601bca88d96e987e65cd7c4afa/132_l.jpg",
            "right": "images/cube_2048/132/55dbd1601bca88d96e987e65cd7c4afa/132_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/132/55dbd1601bca88d96e987e65cd7c4afa/132_u.jpg"
          },
          {
            "back": "images/cube_2048/133/1a5ee2e4351483f37ffc4ab6aac258b7/133_b.jpg",
            "down": "images/cube_2048/133/1a5ee2e4351483f37ffc4ab6aac258b7/133_d.jpg",
            "front": "images/cube_2048/133/1a5ee2e4351483f37ffc4ab6aac258b7/133_f.jpg",
            "index": 133,
            "left": "images/cube_2048/133/1a5ee2e4351483f37ffc4ab6aac258b7/133_l.jpg",
            "right": "images/cube_2048/133/1a5ee2e4351483f37ffc4ab6aac258b7/133_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/133/1a5ee2e4351483f37ffc4ab6aac258b7/133_u.jpg"
          },
          {
            "back": "images/cube_2048/134/1609439d859af13abedcd1088dc86b4e/134_b.jpg",
            "down": "images/cube_2048/134/1609439d859af13abedcd1088dc86b4e/134_d.jpg",
            "front": "images/cube_2048/134/1609439d859af13abedcd1088dc86b4e/134_f.jpg",
            "index": 134,
            "left": "images/cube_2048/134/1609439d859af13abedcd1088dc86b4e/134_l.jpg",
            "right": "images/cube_2048/134/1609439d859af13abedcd1088dc86b4e/134_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/134/1609439d859af13abedcd1088dc86b4e/134_u.jpg"
          },
          {
            "back": "images/cube_2048/135/969b49966f8f4ff243cb6bc08d4ed92a/135_b.jpg",
            "down": "images/cube_2048/135/969b49966f8f4ff243cb6bc08d4ed92a/135_d.jpg",
            "front": "images/cube_2048/135/969b49966f8f4ff243cb6bc08d4ed92a/135_f.jpg",
            "index": 135,
            "left": "images/cube_2048/135/969b49966f8f4ff243cb6bc08d4ed92a/135_l.jpg",
            "right": "images/cube_2048/135/969b49966f8f4ff243cb6bc08d4ed92a/135_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/135/969b49966f8f4ff243cb6bc08d4ed92a/135_u.jpg"
          },
          {
            "back": "images/cube_2048/136/b43ef6b8ac3d7c49af8f44e2a5ad6943/136_b.jpg",
            "down": "images/cube_2048/136/b43ef6b8ac3d7c49af8f44e2a5ad6943/136_d.jpg",
            "front": "images/cube_2048/136/b43ef6b8ac3d7c49af8f44e2a5ad6943/136_f.jpg",
            "index": 136,
            "left": "images/cube_2048/136/b43ef6b8ac3d7c49af8f44e2a5ad6943/136_l.jpg",
            "right": "images/cube_2048/136/b43ef6b8ac3d7c49af8f44e2a5ad6943/136_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/136/b43ef6b8ac3d7c49af8f44e2a5ad6943/136_u.jpg"
          },
          {
            "back": "images/cube_2048/137/7989569908e9ce3ccb427d0ab12fc204/137_b.jpg",
            "down": "images/cube_2048/137/7989569908e9ce3ccb427d0ab12fc204/137_d.jpg",
            "front": "images/cube_2048/137/7989569908e9ce3ccb427d0ab12fc204/137_f.jpg",
            "index": 137,
            "left": "images/cube_2048/137/7989569908e9ce3ccb427d0ab12fc204/137_l.jpg",
            "right": "images/cube_2048/137/7989569908e9ce3ccb427d0ab12fc204/137_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/137/7989569908e9ce3ccb427d0ab12fc204/137_u.jpg"
          },
          {
            "back": "images/cube_2048/138/44b906bdc5f7113af42e5f01234cf15c/138_b.jpg",
            "down": "images/cube_2048/138/44b906bdc5f7113af42e5f01234cf15c/138_d.jpg",
            "front": "images/cube_2048/138/44b906bdc5f7113af42e5f01234cf15c/138_f.jpg",
            "index": 138,
            "left": "images/cube_2048/138/44b906bdc5f7113af42e5f01234cf15c/138_l.jpg",
            "right": "images/cube_2048/138/44b906bdc5f7113af42e5f01234cf15c/138_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/138/44b906bdc5f7113af42e5f01234cf15c/138_u.jpg"
          },
          {
            "back": "images/cube_2048/139/924772bc3d1c0a0ded342274e479baab/139_b.jpg",
            "down": "images/cube_2048/139/924772bc3d1c0a0ded342274e479baab/139_d.jpg",
            "front": "images/cube_2048/139/924772bc3d1c0a0ded342274e479baab/139_f.jpg",
            "index": 139,
            "left": "images/cube_2048/139/924772bc3d1c0a0ded342274e479baab/139_l.jpg",
            "right": "images/cube_2048/139/924772bc3d1c0a0ded342274e479baab/139_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/139/924772bc3d1c0a0ded342274e479baab/139_u.jpg"
          },
          {
            "back": "images/cube_2048/140/bc4306e93f4c054e8aa3ff04a6d4b8eb/140_b.jpg",
            "down": "images/cube_2048/140/bc4306e93f4c054e8aa3ff04a6d4b8eb/140_d.jpg",
            "front": "images/cube_2048/140/bc4306e93f4c054e8aa3ff04a6d4b8eb/140_f.jpg",
            "index": 140,
            "left": "images/cube_2048/140/bc4306e93f4c054e8aa3ff04a6d4b8eb/140_l.jpg",
            "right": "images/cube_2048/140/bc4306e93f4c054e8aa3ff04a6d4b8eb/140_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/140/bc4306e93f4c054e8aa3ff04a6d4b8eb/140_u.jpg"
          },
          {
            "back": "images/cube_2048/141/baa7bae55f6d23e1e763f996e3004408/141_b.jpg",
            "down": "images/cube_2048/141/baa7bae55f6d23e1e763f996e3004408/141_d.jpg",
            "front": "images/cube_2048/141/baa7bae55f6d23e1e763f996e3004408/141_f.jpg",
            "index": 141,
            "left": "images/cube_2048/141/baa7bae55f6d23e1e763f996e3004408/141_l.jpg",
            "right": "images/cube_2048/141/baa7bae55f6d23e1e763f996e3004408/141_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/141/baa7bae55f6d23e1e763f996e3004408/141_u.jpg"
          },
          {
            "back": "images/cube_2048/142/3c3715a8c760043a00862c7c62522240/142_b.jpg",
            "down": "images/cube_2048/142/3c3715a8c760043a00862c7c62522240/142_d.jpg",
            "front": "images/cube_2048/142/3c3715a8c760043a00862c7c62522240/142_f.jpg",
            "index": 142,
            "left": "images/cube_2048/142/3c3715a8c760043a00862c7c62522240/142_l.jpg",
            "right": "images/cube_2048/142/3c3715a8c760043a00862c7c62522240/142_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/142/3c3715a8c760043a00862c7c62522240/142_u.jpg"
          },
          {
            "back": "images/cube_2048/143/eec90b720af481684ad7f6adcfb16375/143_b.jpg",
            "down": "images/cube_2048/143/eec90b720af481684ad7f6adcfb16375/143_d.jpg",
            "front": "images/cube_2048/143/eec90b720af481684ad7f6adcfb16375/143_f.jpg",
            "index": 143,
            "left": "images/cube_2048/143/eec90b720af481684ad7f6adcfb16375/143_l.jpg",
            "right": "images/cube_2048/143/eec90b720af481684ad7f6adcfb16375/143_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/143/eec90b720af481684ad7f6adcfb16375/143_u.jpg"
          },
          {
            "back": "images/cube_2048/144/69ddf8361ede28920a0fd99c28f1e5a0/144_b.jpg",
            "down": "images/cube_2048/144/69ddf8361ede28920a0fd99c28f1e5a0/144_d.jpg",
            "front": "images/cube_2048/144/69ddf8361ede28920a0fd99c28f1e5a0/144_f.jpg",
            "index": 144,
            "left": "images/cube_2048/144/69ddf8361ede28920a0fd99c28f1e5a0/144_l.jpg",
            "right": "images/cube_2048/144/69ddf8361ede28920a0fd99c28f1e5a0/144_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/144/69ddf8361ede28920a0fd99c28f1e5a0/144_u.jpg"
          },
          {
            "back": "images/cube_2048/145/7cc8c687eea286691e77dd40231d1ce9/145_b.jpg",
            "down": "images/cube_2048/145/7cc8c687eea286691e77dd40231d1ce9/145_d.jpg",
            "front": "images/cube_2048/145/7cc8c687eea286691e77dd40231d1ce9/145_f.jpg",
            "index": 145,
            "left": "images/cube_2048/145/7cc8c687eea286691e77dd40231d1ce9/145_l.jpg",
            "right": "images/cube_2048/145/7cc8c687eea286691e77dd40231d1ce9/145_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/145/7cc8c687eea286691e77dd40231d1ce9/145_u.jpg"
          },
          {
            "back": "images/cube_2048/146/2127f6cab48f0c6cebda4424360076b2/146_b.jpg",
            "down": "images/cube_2048/146/2127f6cab48f0c6cebda4424360076b2/146_d.jpg",
            "front": "images/cube_2048/146/2127f6cab48f0c6cebda4424360076b2/146_f.jpg",
            "index": 146,
            "left": "images/cube_2048/146/2127f6cab48f0c6cebda4424360076b2/146_l.jpg",
            "right": "images/cube_2048/146/2127f6cab48f0c6cebda4424360076b2/146_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/146/2127f6cab48f0c6cebda4424360076b2/146_u.jpg"
          },
          {
            "back": "images/cube_2048/147/e55e91246b64cf1fa939beccedeab873/147_b.jpg",
            "down": "images/cube_2048/147/e55e91246b64cf1fa939beccedeab873/147_d.jpg",
            "front": "images/cube_2048/147/e55e91246b64cf1fa939beccedeab873/147_f.jpg",
            "index": 147,
            "left": "images/cube_2048/147/e55e91246b64cf1fa939beccedeab873/147_l.jpg",
            "right": "images/cube_2048/147/e55e91246b64cf1fa939beccedeab873/147_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/147/e55e91246b64cf1fa939beccedeab873/147_u.jpg"
          },
          {
            "back": "images/cube_2048/148/386cafb562be7a1b26139ab89b5f16c0/148_b.jpg",
            "down": "images/cube_2048/148/386cafb562be7a1b26139ab89b5f16c0/148_d.jpg",
            "front": "images/cube_2048/148/386cafb562be7a1b26139ab89b5f16c0/148_f.jpg",
            "index": 148,
            "left": "images/cube_2048/148/386cafb562be7a1b26139ab89b5f16c0/148_l.jpg",
            "right": "images/cube_2048/148/386cafb562be7a1b26139ab89b5f16c0/148_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/148/386cafb562be7a1b26139ab89b5f16c0/148_u.jpg"
          },
          {
            "back": "images/cube_2048/149/75e40905ff4efb5f4844754a7c93219d/149_b.jpg",
            "down": "images/cube_2048/149/75e40905ff4efb5f4844754a7c93219d/149_d.jpg",
            "front": "images/cube_2048/149/75e40905ff4efb5f4844754a7c93219d/149_f.jpg",
            "index": 149,
            "left": "images/cube_2048/149/75e40905ff4efb5f4844754a7c93219d/149_l.jpg",
            "right": "images/cube_2048/149/75e40905ff4efb5f4844754a7c93219d/149_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/149/75e40905ff4efb5f4844754a7c93219d/149_u.jpg"
          },
          {
            "back": "images/cube_2048/150/a289739e6ca25168bb6211225d4bbf8c/150_b.jpg",
            "down": "images/cube_2048/150/a289739e6ca25168bb6211225d4bbf8c/150_d.jpg",
            "front": "images/cube_2048/150/a289739e6ca25168bb6211225d4bbf8c/150_f.jpg",
            "index": 150,
            "left": "images/cube_2048/150/a289739e6ca25168bb6211225d4bbf8c/150_l.jpg",
            "right": "images/cube_2048/150/a289739e6ca25168bb6211225d4bbf8c/150_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/150/a289739e6ca25168bb6211225d4bbf8c/150_u.jpg"
          },
          {
            "back": "images/cube_2048/151/5868f900b0e4f687198090a23de4c953/151_b.jpg",
            "down": "images/cube_2048/151/5868f900b0e4f687198090a23de4c953/151_d.jpg",
            "front": "images/cube_2048/151/5868f900b0e4f687198090a23de4c953/151_f.jpg",
            "index": 151,
            "left": "images/cube_2048/151/5868f900b0e4f687198090a23de4c953/151_l.jpg",
            "right": "images/cube_2048/151/5868f900b0e4f687198090a23de4c953/151_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/151/5868f900b0e4f687198090a23de4c953/151_u.jpg"
          },
          {
            "back": "images/cube_2048/152/b9efe0a43082c50d5282c9d0b4b75b04/152_b.jpg",
            "down": "images/cube_2048/152/b9efe0a43082c50d5282c9d0b4b75b04/152_d.jpg",
            "front": "images/cube_2048/152/b9efe0a43082c50d5282c9d0b4b75b04/152_f.jpg",
            "index": 152,
            "left": "images/cube_2048/152/b9efe0a43082c50d5282c9d0b4b75b04/152_l.jpg",
            "right": "images/cube_2048/152/b9efe0a43082c50d5282c9d0b4b75b04/152_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/152/b9efe0a43082c50d5282c9d0b4b75b04/152_u.jpg"
          },
          {
            "back": "images/cube_2048/153/7a3ca44de518006eb39e8c28ab6789d8/153_b.jpg",
            "down": "images/cube_2048/153/7a3ca44de518006eb39e8c28ab6789d8/153_d.jpg",
            "front": "images/cube_2048/153/7a3ca44de518006eb39e8c28ab6789d8/153_f.jpg",
            "index": 153,
            "left": "images/cube_2048/153/7a3ca44de518006eb39e8c28ab6789d8/153_l.jpg",
            "right": "images/cube_2048/153/7a3ca44de518006eb39e8c28ab6789d8/153_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/153/7a3ca44de518006eb39e8c28ab6789d8/153_u.jpg"
          },
          {
            "back": "images/cube_2048/154/0d78745c144272f7b2c8db5c5d5eccb8/154_b.jpg",
            "down": "images/cube_2048/154/0d78745c144272f7b2c8db5c5d5eccb8/154_d.jpg",
            "front": "images/cube_2048/154/0d78745c144272f7b2c8db5c5d5eccb8/154_f.jpg",
            "index": 154,
            "left": "images/cube_2048/154/0d78745c144272f7b2c8db5c5d5eccb8/154_l.jpg",
            "right": "images/cube_2048/154/0d78745c144272f7b2c8db5c5d5eccb8/154_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/154/0d78745c144272f7b2c8db5c5d5eccb8/154_u.jpg"
          },
          {
            "back": "images/cube_2048/155/53d0dc4c18be35d4eb3b782b11035d33/155_b.jpg",
            "down": "images/cube_2048/155/53d0dc4c18be35d4eb3b782b11035d33/155_d.jpg",
            "front": "images/cube_2048/155/53d0dc4c18be35d4eb3b782b11035d33/155_f.jpg",
            "index": 155,
            "left": "images/cube_2048/155/53d0dc4c18be35d4eb3b782b11035d33/155_l.jpg",
            "right": "images/cube_2048/155/53d0dc4c18be35d4eb3b782b11035d33/155_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/155/53d0dc4c18be35d4eb3b782b11035d33/155_u.jpg"
          },
          {
            "back": "images/cube_2048/156/30077677212ca273be59dce3e7f31fed/156_b.jpg",
            "down": "images/cube_2048/156/30077677212ca273be59dce3e7f31fed/156_d.jpg",
            "front": "images/cube_2048/156/30077677212ca273be59dce3e7f31fed/156_f.jpg",
            "index": 156,
            "left": "images/cube_2048/156/30077677212ca273be59dce3e7f31fed/156_l.jpg",
            "right": "images/cube_2048/156/30077677212ca273be59dce3e7f31fed/156_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/156/30077677212ca273be59dce3e7f31fed/156_u.jpg"
          },
          {
            "back": "images/cube_2048/157/a268d77586d36771408e9147beb6d85f/157_b.jpg",
            "down": "images/cube_2048/157/a268d77586d36771408e9147beb6d85f/157_d.jpg",
            "front": "images/cube_2048/157/a268d77586d36771408e9147beb6d85f/157_f.jpg",
            "index": 157,
            "left": "images/cube_2048/157/a268d77586d36771408e9147beb6d85f/157_l.jpg",
            "right": "images/cube_2048/157/a268d77586d36771408e9147beb6d85f/157_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/157/a268d77586d36771408e9147beb6d85f/157_u.jpg"
          },
          {
            "back": "images/cube_2048/158/c08803f77b24186b7908027bdc8f7391/158_b.jpg",
            "down": "images/cube_2048/158/c08803f77b24186b7908027bdc8f7391/158_d.jpg",
            "front": "images/cube_2048/158/c08803f77b24186b7908027bdc8f7391/158_f.jpg",
            "index": 158,
            "left": "images/cube_2048/158/c08803f77b24186b7908027bdc8f7391/158_l.jpg",
            "right": "images/cube_2048/158/c08803f77b24186b7908027bdc8f7391/158_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/158/c08803f77b24186b7908027bdc8f7391/158_u.jpg"
          },
          {
            "back": "images/cube_2048/159/bed00609b9769d4ed46a7cbe5f574b6f/159_b.jpg",
            "down": "images/cube_2048/159/bed00609b9769d4ed46a7cbe5f574b6f/159_d.jpg",
            "front": "images/cube_2048/159/bed00609b9769d4ed46a7cbe5f574b6f/159_f.jpg",
            "index": 159,
            "left": "images/cube_2048/159/bed00609b9769d4ed46a7cbe5f574b6f/159_l.jpg",
            "right": "images/cube_2048/159/bed00609b9769d4ed46a7cbe5f574b6f/159_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/159/bed00609b9769d4ed46a7cbe5f574b6f/159_u.jpg"
          },
          {
            "back": "images/cube_2048/160/a114a60d9b931d6f6c78840e9f9e35b0/160_b.jpg",
            "down": "images/cube_2048/160/a114a60d9b931d6f6c78840e9f9e35b0/160_d.jpg",
            "front": "images/cube_2048/160/a114a60d9b931d6f6c78840e9f9e35b0/160_f.jpg",
            "index": 160,
            "left": "images/cube_2048/160/a114a60d9b931d6f6c78840e9f9e35b0/160_l.jpg",
            "right": "images/cube_2048/160/a114a60d9b931d6f6c78840e9f9e35b0/160_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/160/a114a60d9b931d6f6c78840e9f9e35b0/160_u.jpg"
          },
          {
            "back": "images/cube_2048/161/f350410b92e54fd18cd7eeaa2922fe4b/161_b.jpg",
            "down": "images/cube_2048/161/f350410b92e54fd18cd7eeaa2922fe4b/161_d.jpg",
            "front": "images/cube_2048/161/f350410b92e54fd18cd7eeaa2922fe4b/161_f.jpg",
            "index": 161,
            "left": "images/cube_2048/161/f350410b92e54fd18cd7eeaa2922fe4b/161_l.jpg",
            "right": "images/cube_2048/161/f350410b92e54fd18cd7eeaa2922fe4b/161_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/161/f350410b92e54fd18cd7eeaa2922fe4b/161_u.jpg"
          },
          {
            "back": "images/cube_2048/162/41ada2b64eac726b896837a2d1f1d99b/162_b.jpg",
            "down": "images/cube_2048/162/41ada2b64eac726b896837a2d1f1d99b/162_d.jpg",
            "front": "images/cube_2048/162/41ada2b64eac726b896837a2d1f1d99b/162_f.jpg",
            "index": 162,
            "left": "images/cube_2048/162/41ada2b64eac726b896837a2d1f1d99b/162_l.jpg",
            "right": "images/cube_2048/162/41ada2b64eac726b896837a2d1f1d99b/162_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/162/41ada2b64eac726b896837a2d1f1d99b/162_u.jpg"
          },
          {
            "back": "images/cube_2048/163/dd5662c5d5eaecae7da752665b2d252c/163_b.jpg",
            "down": "images/cube_2048/163/dd5662c5d5eaecae7da752665b2d252c/163_d.jpg",
            "front": "images/cube_2048/163/dd5662c5d5eaecae7da752665b2d252c/163_f.jpg",
            "index": 163,
            "left": "images/cube_2048/163/dd5662c5d5eaecae7da752665b2d252c/163_l.jpg",
            "right": "images/cube_2048/163/dd5662c5d5eaecae7da752665b2d252c/163_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/163/dd5662c5d5eaecae7da752665b2d252c/163_u.jpg"
          },
          {
            "back": "images/cube_2048/164/aca1e86115e5513e415cb9929e66713f/164_b.jpg",
            "down": "images/cube_2048/164/aca1e86115e5513e415cb9929e66713f/164_d.jpg",
            "front": "images/cube_2048/164/aca1e86115e5513e415cb9929e66713f/164_f.jpg",
            "index": 164,
            "left": "images/cube_2048/164/aca1e86115e5513e415cb9929e66713f/164_l.jpg",
            "right": "images/cube_2048/164/aca1e86115e5513e415cb9929e66713f/164_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/164/aca1e86115e5513e415cb9929e66713f/164_u.jpg"
          },
          {
            "back": "images/cube_2048/165/7050028d77248a66f7c861dfd70ccd4c/165_b.jpg",
            "down": "images/cube_2048/165/7050028d77248a66f7c861dfd70ccd4c/165_d.jpg",
            "front": "images/cube_2048/165/7050028d77248a66f7c861dfd70ccd4c/165_f.jpg",
            "index": 165,
            "left": "images/cube_2048/165/7050028d77248a66f7c861dfd70ccd4c/165_l.jpg",
            "right": "images/cube_2048/165/7050028d77248a66f7c861dfd70ccd4c/165_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/165/7050028d77248a66f7c861dfd70ccd4c/165_u.jpg"
          },
          {
            "back": "images/cube_2048/166/fd67f094ec93c5c501e18aaaeac6cb31/166_b.jpg",
            "down": "images/cube_2048/166/fd67f094ec93c5c501e18aaaeac6cb31/166_d.jpg",
            "front": "images/cube_2048/166/fd67f094ec93c5c501e18aaaeac6cb31/166_f.jpg",
            "index": 166,
            "left": "images/cube_2048/166/fd67f094ec93c5c501e18aaaeac6cb31/166_l.jpg",
            "right": "images/cube_2048/166/fd67f094ec93c5c501e18aaaeac6cb31/166_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/166/fd67f094ec93c5c501e18aaaeac6cb31/166_u.jpg"
          },
          {
            "back": "images/cube_2048/167/22680088c9101a162102ee6357782d71/167_b.jpg",
            "down": "images/cube_2048/167/22680088c9101a162102ee6357782d71/167_d.jpg",
            "front": "images/cube_2048/167/22680088c9101a162102ee6357782d71/167_f.jpg",
            "index": 167,
            "left": "images/cube_2048/167/22680088c9101a162102ee6357782d71/167_l.jpg",
            "right": "images/cube_2048/167/22680088c9101a162102ee6357782d71/167_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/167/22680088c9101a162102ee6357782d71/167_u.jpg"
          },
          {
            "back": "images/cube_2048/168/8036c0c94b694fa66ba012b0434d72ae/168_b.jpg",
            "down": "images/cube_2048/168/8036c0c94b694fa66ba012b0434d72ae/168_d.jpg",
            "front": "images/cube_2048/168/8036c0c94b694fa66ba012b0434d72ae/168_f.jpg",
            "index": 168,
            "left": "images/cube_2048/168/8036c0c94b694fa66ba012b0434d72ae/168_l.jpg",
            "right": "images/cube_2048/168/8036c0c94b694fa66ba012b0434d72ae/168_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/168/8036c0c94b694fa66ba012b0434d72ae/168_u.jpg"
          },
          {
            "back": "images/cube_2048/169/612a5b848444656d6a6494e76e3e6dda/169_b.jpg",
            "down": "images/cube_2048/169/612a5b848444656d6a6494e76e3e6dda/169_d.jpg",
            "front": "images/cube_2048/169/612a5b848444656d6a6494e76e3e6dda/169_f.jpg",
            "index": 169,
            "left": "images/cube_2048/169/612a5b848444656d6a6494e76e3e6dda/169_l.jpg",
            "right": "images/cube_2048/169/612a5b848444656d6a6494e76e3e6dda/169_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/169/612a5b848444656d6a6494e76e3e6dda/169_u.jpg"
          },
          {
            "back": "images/cube_2048/170/33a54c0b2534fc5cb96f842a1f4b2066/170_b.jpg",
            "down": "images/cube_2048/170/33a54c0b2534fc5cb96f842a1f4b2066/170_d.jpg",
            "front": "images/cube_2048/170/33a54c0b2534fc5cb96f842a1f4b2066/170_f.jpg",
            "index": 170,
            "left": "images/cube_2048/170/33a54c0b2534fc5cb96f842a1f4b2066/170_l.jpg",
            "right": "images/cube_2048/170/33a54c0b2534fc5cb96f842a1f4b2066/170_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/170/33a54c0b2534fc5cb96f842a1f4b2066/170_u.jpg"
          },
          {
            "back": "images/cube_2048/171/6c0bb668e6db030347eab0ecae790bf8/171_b.jpg",
            "down": "images/cube_2048/171/6c0bb668e6db030347eab0ecae790bf8/171_d.jpg",
            "front": "images/cube_2048/171/6c0bb668e6db030347eab0ecae790bf8/171_f.jpg",
            "index": 171,
            "left": "images/cube_2048/171/6c0bb668e6db030347eab0ecae790bf8/171_l.jpg",
            "right": "images/cube_2048/171/6c0bb668e6db030347eab0ecae790bf8/171_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/171/6c0bb668e6db030347eab0ecae790bf8/171_u.jpg"
          },
          {
            "back": "images/cube_2048/172/ac51f17dac250ba6776287c5a832f4be/172_b.jpg",
            "down": "images/cube_2048/172/ac51f17dac250ba6776287c5a832f4be/172_d.jpg",
            "front": "images/cube_2048/172/ac51f17dac250ba6776287c5a832f4be/172_f.jpg",
            "index": 172,
            "left": "images/cube_2048/172/ac51f17dac250ba6776287c5a832f4be/172_l.jpg",
            "right": "images/cube_2048/172/ac51f17dac250ba6776287c5a832f4be/172_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/172/ac51f17dac250ba6776287c5a832f4be/172_u.jpg"
          },
          {
            "back": "images/cube_2048/173/add71e94ba254dbd2c2f591a8bc5f0b6/173_b.jpg",
            "down": "images/cube_2048/173/add71e94ba254dbd2c2f591a8bc5f0b6/173_d.jpg",
            "front": "images/cube_2048/173/add71e94ba254dbd2c2f591a8bc5f0b6/173_f.jpg",
            "index": 173,
            "left": "images/cube_2048/173/add71e94ba254dbd2c2f591a8bc5f0b6/173_l.jpg",
            "right": "images/cube_2048/173/add71e94ba254dbd2c2f591a8bc5f0b6/173_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/173/add71e94ba254dbd2c2f591a8bc5f0b6/173_u.jpg"
          },
          {
            "back": "images/cube_2048/174/33f85584ecb27fea0ebc9ef5fa546144/174_b.jpg",
            "down": "images/cube_2048/174/33f85584ecb27fea0ebc9ef5fa546144/174_d.jpg",
            "front": "images/cube_2048/174/33f85584ecb27fea0ebc9ef5fa546144/174_f.jpg",
            "index": 174,
            "left": "images/cube_2048/174/33f85584ecb27fea0ebc9ef5fa546144/174_l.jpg",
            "right": "images/cube_2048/174/33f85584ecb27fea0ebc9ef5fa546144/174_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/174/33f85584ecb27fea0ebc9ef5fa546144/174_u.jpg"
          },
          {
            "back": "images/cube_2048/175/96410bab85a51551b683b82c0aff872f/175_b.jpg",
            "down": "images/cube_2048/175/96410bab85a51551b683b82c0aff872f/175_d.jpg",
            "front": "images/cube_2048/175/96410bab85a51551b683b82c0aff872f/175_f.jpg",
            "index": 175,
            "left": "images/cube_2048/175/96410bab85a51551b683b82c0aff872f/175_l.jpg",
            "right": "images/cube_2048/175/96410bab85a51551b683b82c0aff872f/175_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/175/96410bab85a51551b683b82c0aff872f/175_u.jpg"
          },
          {
            "back": "images/cube_2048/176/025942085d019144159fe4f3edf58e5b/176_b.jpg",
            "down": "images/cube_2048/176/025942085d019144159fe4f3edf58e5b/176_d.jpg",
            "front": "images/cube_2048/176/025942085d019144159fe4f3edf58e5b/176_f.jpg",
            "index": 176,
            "left": "images/cube_2048/176/025942085d019144159fe4f3edf58e5b/176_l.jpg",
            "right": "images/cube_2048/176/025942085d019144159fe4f3edf58e5b/176_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/176/025942085d019144159fe4f3edf58e5b/176_u.jpg"
          },
          {
            "back": "images/cube_2048/177/099bbda9a60ae1da375e1ba88056745f/177_b.jpg",
            "down": "images/cube_2048/177/099bbda9a60ae1da375e1ba88056745f/177_d.jpg",
            "front": "images/cube_2048/177/099bbda9a60ae1da375e1ba88056745f/177_f.jpg",
            "index": 177,
            "left": "images/cube_2048/177/099bbda9a60ae1da375e1ba88056745f/177_l.jpg",
            "right": "images/cube_2048/177/099bbda9a60ae1da375e1ba88056745f/177_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/177/099bbda9a60ae1da375e1ba88056745f/177_u.jpg"
          },
          {
            "back": "images/cube_2048/178/5b069a5e5279a9be6349ec74b884782d/178_b.jpg",
            "down": "images/cube_2048/178/5b069a5e5279a9be6349ec74b884782d/178_d.jpg",
            "front": "images/cube_2048/178/5b069a5e5279a9be6349ec74b884782d/178_f.jpg",
            "index": 178,
            "left": "images/cube_2048/178/5b069a5e5279a9be6349ec74b884782d/178_l.jpg",
            "right": "images/cube_2048/178/5b069a5e5279a9be6349ec74b884782d/178_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/178/5b069a5e5279a9be6349ec74b884782d/178_u.jpg"
          },
          {
            "back": "images/cube_2048/179/804d3aa578e1b99aef6f3de3bff8e702/179_b.jpg",
            "down": "images/cube_2048/179/804d3aa578e1b99aef6f3de3bff8e702/179_d.jpg",
            "front": "images/cube_2048/179/804d3aa578e1b99aef6f3de3bff8e702/179_f.jpg",
            "index": 179,
            "left": "images/cube_2048/179/804d3aa578e1b99aef6f3de3bff8e702/179_l.jpg",
            "right": "images/cube_2048/179/804d3aa578e1b99aef6f3de3bff8e702/179_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/179/804d3aa578e1b99aef6f3de3bff8e702/179_u.jpg"
          },
          {
            "back": "images/cube_2048/180/ff4d27d07a9eacf35e7efec97cd74f2b/180_b.jpg",
            "down": "images/cube_2048/180/ff4d27d07a9eacf35e7efec97cd74f2b/180_d.jpg",
            "front": "images/cube_2048/180/ff4d27d07a9eacf35e7efec97cd74f2b/180_f.jpg",
            "index": 180,
            "left": "images/cube_2048/180/ff4d27d07a9eacf35e7efec97cd74f2b/180_l.jpg",
            "right": "images/cube_2048/180/ff4d27d07a9eacf35e7efec97cd74f2b/180_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/180/ff4d27d07a9eacf35e7efec97cd74f2b/180_u.jpg"
          },
          {
            "back": "images/cube_2048/181/1e55b7f4936b396396e1eefcc579c108/181_b.jpg",
            "down": "images/cube_2048/181/1e55b7f4936b396396e1eefcc579c108/181_d.jpg",
            "front": "images/cube_2048/181/1e55b7f4936b396396e1eefcc579c108/181_f.jpg",
            "index": 181,
            "left": "images/cube_2048/181/1e55b7f4936b396396e1eefcc579c108/181_l.jpg",
            "right": "images/cube_2048/181/1e55b7f4936b396396e1eefcc579c108/181_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/181/1e55b7f4936b396396e1eefcc579c108/181_u.jpg"
          },
          {
            "back": "images/cube_2048/182/0e418f4f24346405aee36b0b28393ecf/182_b.jpg",
            "down": "images/cube_2048/182/0e418f4f24346405aee36b0b28393ecf/182_d.jpg",
            "front": "images/cube_2048/182/0e418f4f24346405aee36b0b28393ecf/182_f.jpg",
            "index": 182,
            "left": "images/cube_2048/182/0e418f4f24346405aee36b0b28393ecf/182_l.jpg",
            "right": "images/cube_2048/182/0e418f4f24346405aee36b0b28393ecf/182_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/182/0e418f4f24346405aee36b0b28393ecf/182_u.jpg"
          },
          {
            "back": "images/cube_2048/183/d478d65a428856185c202a8881662d1c/183_b.jpg",
            "down": "images/cube_2048/183/d478d65a428856185c202a8881662d1c/183_d.jpg",
            "front": "images/cube_2048/183/d478d65a428856185c202a8881662d1c/183_f.jpg",
            "index": 183,
            "left": "images/cube_2048/183/d478d65a428856185c202a8881662d1c/183_l.jpg",
            "right": "images/cube_2048/183/d478d65a428856185c202a8881662d1c/183_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/183/d478d65a428856185c202a8881662d1c/183_u.jpg"
          },
          {
            "back": "images/cube_2048/184/2d4d5aaa6c61360596708ba116c827cf/184_b.jpg",
            "down": "images/cube_2048/184/2d4d5aaa6c61360596708ba116c827cf/184_d.jpg",
            "front": "images/cube_2048/184/2d4d5aaa6c61360596708ba116c827cf/184_f.jpg",
            "index": 184,
            "left": "images/cube_2048/184/2d4d5aaa6c61360596708ba116c827cf/184_l.jpg",
            "right": "images/cube_2048/184/2d4d5aaa6c61360596708ba116c827cf/184_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/184/2d4d5aaa6c61360596708ba116c827cf/184_u.jpg"
          },
          {
            "back": "images/cube_2048/185/9e14995614df1a251abda8f5b4358c83/185_b.jpg",
            "down": "images/cube_2048/185/9e14995614df1a251abda8f5b4358c83/185_d.jpg",
            "front": "images/cube_2048/185/9e14995614df1a251abda8f5b4358c83/185_f.jpg",
            "index": 185,
            "left": "images/cube_2048/185/9e14995614df1a251abda8f5b4358c83/185_l.jpg",
            "right": "images/cube_2048/185/9e14995614df1a251abda8f5b4358c83/185_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/185/9e14995614df1a251abda8f5b4358c83/185_u.jpg"
          },
          {
            "back": "images/cube_2048/186/1d80dc23beabebb9302e2796188c256b/186_b.jpg",
            "down": "images/cube_2048/186/1d80dc23beabebb9302e2796188c256b/186_d.jpg",
            "front": "images/cube_2048/186/1d80dc23beabebb9302e2796188c256b/186_f.jpg",
            "index": 186,
            "left": "images/cube_2048/186/1d80dc23beabebb9302e2796188c256b/186_l.jpg",
            "right": "images/cube_2048/186/1d80dc23beabebb9302e2796188c256b/186_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/186/1d80dc23beabebb9302e2796188c256b/186_u.jpg"
          },
          {
            "back": "images/cube_2048/187/b58e81fbe0233a7dc6efb6c044a5805b/187_b.jpg",
            "down": "images/cube_2048/187/b58e81fbe0233a7dc6efb6c044a5805b/187_d.jpg",
            "front": "images/cube_2048/187/b58e81fbe0233a7dc6efb6c044a5805b/187_f.jpg",
            "index": 187,
            "left": "images/cube_2048/187/b58e81fbe0233a7dc6efb6c044a5805b/187_l.jpg",
            "right": "images/cube_2048/187/b58e81fbe0233a7dc6efb6c044a5805b/187_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/187/b58e81fbe0233a7dc6efb6c044a5805b/187_u.jpg"
          },
          {
            "back": "images/cube_2048/188/574c40fc1c885e526818d530ac48c2ea/188_b.jpg",
            "down": "images/cube_2048/188/574c40fc1c885e526818d530ac48c2ea/188_d.jpg",
            "front": "images/cube_2048/188/574c40fc1c885e526818d530ac48c2ea/188_f.jpg",
            "index": 188,
            "left": "images/cube_2048/188/574c40fc1c885e526818d530ac48c2ea/188_l.jpg",
            "right": "images/cube_2048/188/574c40fc1c885e526818d530ac48c2ea/188_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/188/574c40fc1c885e526818d530ac48c2ea/188_u.jpg"
          },
          {
            "back": "images/cube_2048/189/2459b296ee93047f2ef641befac6dd13/189_b.jpg",
            "down": "images/cube_2048/189/2459b296ee93047f2ef641befac6dd13/189_d.jpg",
            "front": "images/cube_2048/189/2459b296ee93047f2ef641befac6dd13/189_f.jpg",
            "index": 189,
            "left": "images/cube_2048/189/2459b296ee93047f2ef641befac6dd13/189_l.jpg",
            "right": "images/cube_2048/189/2459b296ee93047f2ef641befac6dd13/189_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/189/2459b296ee93047f2ef641befac6dd13/189_u.jpg"
          },
          {
            "back": "images/cube_2048/190/50f7bb9b781ba6838c7abb7a604dfff5/190_b.jpg",
            "down": "images/cube_2048/190/50f7bb9b781ba6838c7abb7a604dfff5/190_d.jpg",
            "front": "images/cube_2048/190/50f7bb9b781ba6838c7abb7a604dfff5/190_f.jpg",
            "index": 190,
            "left": "images/cube_2048/190/50f7bb9b781ba6838c7abb7a604dfff5/190_l.jpg",
            "right": "images/cube_2048/190/50f7bb9b781ba6838c7abb7a604dfff5/190_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/190/50f7bb9b781ba6838c7abb7a604dfff5/190_u.jpg"
          },
          {
            "back": "images/cube_2048/191/342253378d4047a9d9757e009f213493/191_b.jpg",
            "down": "images/cube_2048/191/342253378d4047a9d9757e009f213493/191_d.jpg",
            "front": "images/cube_2048/191/342253378d4047a9d9757e009f213493/191_f.jpg",
            "index": 191,
            "left": "images/cube_2048/191/342253378d4047a9d9757e009f213493/191_l.jpg",
            "right": "images/cube_2048/191/342253378d4047a9d9757e009f213493/191_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/191/342253378d4047a9d9757e009f213493/191_u.jpg"
          },
          {
            "back": "images/cube_2048/192/f0c34d170225e1ec7de280f27844f03e/192_b.jpg",
            "down": "images/cube_2048/192/f0c34d170225e1ec7de280f27844f03e/192_d.jpg",
            "front": "images/cube_2048/192/f0c34d170225e1ec7de280f27844f03e/192_f.jpg",
            "index": 192,
            "left": "images/cube_2048/192/f0c34d170225e1ec7de280f27844f03e/192_l.jpg",
            "right": "images/cube_2048/192/f0c34d170225e1ec7de280f27844f03e/192_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/192/f0c34d170225e1ec7de280f27844f03e/192_u.jpg"
          },
          {
            "back": "images/cube_2048/193/d2aef6ae5990ab33be12d43925b8477b/193_b.jpg",
            "down": "images/cube_2048/193/d2aef6ae5990ab33be12d43925b8477b/193_d.jpg",
            "front": "images/cube_2048/193/d2aef6ae5990ab33be12d43925b8477b/193_f.jpg",
            "index": 193,
            "left": "images/cube_2048/193/d2aef6ae5990ab33be12d43925b8477b/193_l.jpg",
            "right": "images/cube_2048/193/d2aef6ae5990ab33be12d43925b8477b/193_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/193/d2aef6ae5990ab33be12d43925b8477b/193_u.jpg"
          },
          {
            "back": "images/cube_2048/194/3222ca6fe3cbedb150c11caa2113f501/194_b.jpg",
            "down": "images/cube_2048/194/3222ca6fe3cbedb150c11caa2113f501/194_d.jpg",
            "front": "images/cube_2048/194/3222ca6fe3cbedb150c11caa2113f501/194_f.jpg",
            "index": 194,
            "left": "images/cube_2048/194/3222ca6fe3cbedb150c11caa2113f501/194_l.jpg",
            "right": "images/cube_2048/194/3222ca6fe3cbedb150c11caa2113f501/194_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/194/3222ca6fe3cbedb150c11caa2113f501/194_u.jpg"
          },
          {
            "back": "images/cube_2048/195/7c2268de8ebb5037dece3cd0e66f3a72/195_b.jpg",
            "down": "images/cube_2048/195/7c2268de8ebb5037dece3cd0e66f3a72/195_d.jpg",
            "front": "images/cube_2048/195/7c2268de8ebb5037dece3cd0e66f3a72/195_f.jpg",
            "index": 195,
            "left": "images/cube_2048/195/7c2268de8ebb5037dece3cd0e66f3a72/195_l.jpg",
            "right": "images/cube_2048/195/7c2268de8ebb5037dece3cd0e66f3a72/195_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/195/7c2268de8ebb5037dece3cd0e66f3a72/195_u.jpg"
          },
          {
            "back": "images/cube_2048/196/c586317e209fb895bc76f1219e5ea6e6/196_b.jpg",
            "down": "images/cube_2048/196/c586317e209fb895bc76f1219e5ea6e6/196_d.jpg",
            "front": "images/cube_2048/196/c586317e209fb895bc76f1219e5ea6e6/196_f.jpg",
            "index": 196,
            "left": "images/cube_2048/196/c586317e209fb895bc76f1219e5ea6e6/196_l.jpg",
            "right": "images/cube_2048/196/c586317e209fb895bc76f1219e5ea6e6/196_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/196/c586317e209fb895bc76f1219e5ea6e6/196_u.jpg"
          },
          {
            "back": "images/cube_2048/197/53834bc2214e7ea84cfc6f83a3115e1b/197_b.jpg",
            "down": "images/cube_2048/197/53834bc2214e7ea84cfc6f83a3115e1b/197_d.jpg",
            "front": "images/cube_2048/197/53834bc2214e7ea84cfc6f83a3115e1b/197_f.jpg",
            "index": 197,
            "left": "images/cube_2048/197/53834bc2214e7ea84cfc6f83a3115e1b/197_l.jpg",
            "right": "images/cube_2048/197/53834bc2214e7ea84cfc6f83a3115e1b/197_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/197/53834bc2214e7ea84cfc6f83a3115e1b/197_u.jpg"
          },
          {
            "back": "images/cube_2048/198/d374e002f0d5e57f815ac134be5fb846/198_b.jpg",
            "down": "images/cube_2048/198/d374e002f0d5e57f815ac134be5fb846/198_d.jpg",
            "front": "images/cube_2048/198/d374e002f0d5e57f815ac134be5fb846/198_f.jpg",
            "index": 198,
            "left": "images/cube_2048/198/d374e002f0d5e57f815ac134be5fb846/198_l.jpg",
            "right": "images/cube_2048/198/d374e002f0d5e57f815ac134be5fb846/198_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/198/d374e002f0d5e57f815ac134be5fb846/198_u.jpg"
          },
          {
            "back": "images/cube_2048/199/0ae523e269baad1f0816a0b639121009/199_b.jpg",
            "down": "images/cube_2048/199/0ae523e269baad1f0816a0b639121009/199_d.jpg",
            "front": "images/cube_2048/199/0ae523e269baad1f0816a0b639121009/199_f.jpg",
            "index": 199,
            "left": "images/cube_2048/199/0ae523e269baad1f0816a0b639121009/199_l.jpg",
            "right": "images/cube_2048/199/0ae523e269baad1f0816a0b639121009/199_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/199/0ae523e269baad1f0816a0b639121009/199_u.jpg"
          },
          {
            "back": "images/cube_2048/200/3a1cb9530e65ed74a5761e4bf7dde940/200_b.jpg",
            "down": "images/cube_2048/200/3a1cb9530e65ed74a5761e4bf7dde940/200_d.jpg",
            "front": "images/cube_2048/200/3a1cb9530e65ed74a5761e4bf7dde940/200_f.jpg",
            "index": 200,
            "left": "images/cube_2048/200/3a1cb9530e65ed74a5761e4bf7dde940/200_l.jpg",
            "right": "images/cube_2048/200/3a1cb9530e65ed74a5761e4bf7dde940/200_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/200/3a1cb9530e65ed74a5761e4bf7dde940/200_u.jpg"
          },
          {
            "back": "images/cube_2048/201/acaafdbd9ac4295c0408bcfc3f3abe6f/201_b.jpg",
            "down": "images/cube_2048/201/acaafdbd9ac4295c0408bcfc3f3abe6f/201_d.jpg",
            "front": "images/cube_2048/201/acaafdbd9ac4295c0408bcfc3f3abe6f/201_f.jpg",
            "index": 201,
            "left": "images/cube_2048/201/acaafdbd9ac4295c0408bcfc3f3abe6f/201_l.jpg",
            "right": "images/cube_2048/201/acaafdbd9ac4295c0408bcfc3f3abe6f/201_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/201/acaafdbd9ac4295c0408bcfc3f3abe6f/201_u.jpg"
          },
          {
            "back": "images/cube_2048/202/81c76ed916495feefd6d5c0dd9b42f1f/202_b.jpg",
            "down": "images/cube_2048/202/81c76ed916495feefd6d5c0dd9b42f1f/202_d.jpg",
            "front": "images/cube_2048/202/81c76ed916495feefd6d5c0dd9b42f1f/202_f.jpg",
            "index": 202,
            "left": "images/cube_2048/202/81c76ed916495feefd6d5c0dd9b42f1f/202_l.jpg",
            "right": "images/cube_2048/202/81c76ed916495feefd6d5c0dd9b42f1f/202_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/202/81c76ed916495feefd6d5c0dd9b42f1f/202_u.jpg"
          },
          {
            "back": "images/cube_2048/203/bd7159454c68483b729b255418202cfc/203_b.jpg",
            "down": "images/cube_2048/203/bd7159454c68483b729b255418202cfc/203_d.jpg",
            "front": "images/cube_2048/203/bd7159454c68483b729b255418202cfc/203_f.jpg",
            "index": 203,
            "left": "images/cube_2048/203/bd7159454c68483b729b255418202cfc/203_l.jpg",
            "right": "images/cube_2048/203/bd7159454c68483b729b255418202cfc/203_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/203/bd7159454c68483b729b255418202cfc/203_u.jpg"
          },
          {
            "back": "images/cube_2048/204/9dbcccf5bdf1810e97bb7ccff7ee9656/204_b.jpg",
            "down": "images/cube_2048/204/9dbcccf5bdf1810e97bb7ccff7ee9656/204_d.jpg",
            "front": "images/cube_2048/204/9dbcccf5bdf1810e97bb7ccff7ee9656/204_f.jpg",
            "index": 204,
            "left": "images/cube_2048/204/9dbcccf5bdf1810e97bb7ccff7ee9656/204_l.jpg",
            "right": "images/cube_2048/204/9dbcccf5bdf1810e97bb7ccff7ee9656/204_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/204/9dbcccf5bdf1810e97bb7ccff7ee9656/204_u.jpg"
          },
          {
            "back": "images/cube_2048/205/2a4dfa22a2bb9207f3e3026d50aa7bec/205_b.jpg",
            "down": "images/cube_2048/205/2a4dfa22a2bb9207f3e3026d50aa7bec/205_d.jpg",
            "front": "images/cube_2048/205/2a4dfa22a2bb9207f3e3026d50aa7bec/205_f.jpg",
            "index": 205,
            "left": "images/cube_2048/205/2a4dfa22a2bb9207f3e3026d50aa7bec/205_l.jpg",
            "right": "images/cube_2048/205/2a4dfa22a2bb9207f3e3026d50aa7bec/205_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/205/2a4dfa22a2bb9207f3e3026d50aa7bec/205_u.jpg"
          },
          {
            "back": "images/cube_2048/206/7f8e09a4a894f6e5ae33ec163a5351a1/206_b.jpg",
            "down": "images/cube_2048/206/7f8e09a4a894f6e5ae33ec163a5351a1/206_d.jpg",
            "front": "images/cube_2048/206/7f8e09a4a894f6e5ae33ec163a5351a1/206_f.jpg",
            "index": 206,
            "left": "images/cube_2048/206/7f8e09a4a894f6e5ae33ec163a5351a1/206_l.jpg",
            "right": "images/cube_2048/206/7f8e09a4a894f6e5ae33ec163a5351a1/206_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/206/7f8e09a4a894f6e5ae33ec163a5351a1/206_u.jpg"
          },
          {
            "back": "images/cube_2048/207/1dcc620ae31d6102dace50715026eaa9/207_b.jpg",
            "down": "images/cube_2048/207/1dcc620ae31d6102dace50715026eaa9/207_d.jpg",
            "front": "images/cube_2048/207/1dcc620ae31d6102dace50715026eaa9/207_f.jpg",
            "index": 207,
            "left": "images/cube_2048/207/1dcc620ae31d6102dace50715026eaa9/207_l.jpg",
            "right": "images/cube_2048/207/1dcc620ae31d6102dace50715026eaa9/207_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/207/1dcc620ae31d6102dace50715026eaa9/207_u.jpg"
          },
          {
            "back": "images/cube_2048/208/760deb9e3790c752a5a336b920dc6247/208_b.jpg",
            "down": "images/cube_2048/208/760deb9e3790c752a5a336b920dc6247/208_d.jpg",
            "front": "images/cube_2048/208/760deb9e3790c752a5a336b920dc6247/208_f.jpg",
            "index": 208,
            "left": "images/cube_2048/208/760deb9e3790c752a5a336b920dc6247/208_l.jpg",
            "right": "images/cube_2048/208/760deb9e3790c752a5a336b920dc6247/208_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/208/760deb9e3790c752a5a336b920dc6247/208_u.jpg"
          },
          {
            "back": "images/cube_2048/209/14fcc21c2aed7fe983e32ae34a1811ab/209_b.jpg",
            "down": "images/cube_2048/209/14fcc21c2aed7fe983e32ae34a1811ab/209_d.jpg",
            "front": "images/cube_2048/209/14fcc21c2aed7fe983e32ae34a1811ab/209_f.jpg",
            "index": 209,
            "left": "images/cube_2048/209/14fcc21c2aed7fe983e32ae34a1811ab/209_l.jpg",
            "right": "images/cube_2048/209/14fcc21c2aed7fe983e32ae34a1811ab/209_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/209/14fcc21c2aed7fe983e32ae34a1811ab/209_u.jpg"
          },
          {
            "back": "images/cube_2048/210/27335fe15ecbfe0714dd3e7166adfb59/210_b.jpg",
            "down": "images/cube_2048/210/27335fe15ecbfe0714dd3e7166adfb59/210_d.jpg",
            "front": "images/cube_2048/210/27335fe15ecbfe0714dd3e7166adfb59/210_f.jpg",
            "index": 210,
            "left": "images/cube_2048/210/27335fe15ecbfe0714dd3e7166adfb59/210_l.jpg",
            "right": "images/cube_2048/210/27335fe15ecbfe0714dd3e7166adfb59/210_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/210/27335fe15ecbfe0714dd3e7166adfb59/210_u.jpg"
          },
          {
            "back": "images/cube_2048/211/83444f4ff2a9d2868267bb161d51074a/211_b.jpg",
            "down": "images/cube_2048/211/83444f4ff2a9d2868267bb161d51074a/211_d.jpg",
            "front": "images/cube_2048/211/83444f4ff2a9d2868267bb161d51074a/211_f.jpg",
            "index": 211,
            "left": "images/cube_2048/211/83444f4ff2a9d2868267bb161d51074a/211_l.jpg",
            "right": "images/cube_2048/211/83444f4ff2a9d2868267bb161d51074a/211_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/211/83444f4ff2a9d2868267bb161d51074a/211_u.jpg"
          },
          {
            "back": "images/cube_2048/212/9122fcd2fb812b1644d109e320310ed5/212_b.jpg",
            "down": "images/cube_2048/212/9122fcd2fb812b1644d109e320310ed5/212_d.jpg",
            "front": "images/cube_2048/212/9122fcd2fb812b1644d109e320310ed5/212_f.jpg",
            "index": 212,
            "left": "images/cube_2048/212/9122fcd2fb812b1644d109e320310ed5/212_l.jpg",
            "right": "images/cube_2048/212/9122fcd2fb812b1644d109e320310ed5/212_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/212/9122fcd2fb812b1644d109e320310ed5/212_u.jpg"
          },
          {
            "back": "images/cube_2048/213/9ab13007722a07e52453b97081572abd/213_b.jpg",
            "down": "images/cube_2048/213/9ab13007722a07e52453b97081572abd/213_d.jpg",
            "front": "images/cube_2048/213/9ab13007722a07e52453b97081572abd/213_f.jpg",
            "index": 213,
            "left": "images/cube_2048/213/9ab13007722a07e52453b97081572abd/213_l.jpg",
            "right": "images/cube_2048/213/9ab13007722a07e52453b97081572abd/213_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/213/9ab13007722a07e52453b97081572abd/213_u.jpg"
          },
          {
            "back": "images/cube_2048/214/44cd0a2b9ff245223d56892d494deae6/214_b.jpg",
            "down": "images/cube_2048/214/44cd0a2b9ff245223d56892d494deae6/214_d.jpg",
            "front": "images/cube_2048/214/44cd0a2b9ff245223d56892d494deae6/214_f.jpg",
            "index": 214,
            "left": "images/cube_2048/214/44cd0a2b9ff245223d56892d494deae6/214_l.jpg",
            "right": "images/cube_2048/214/44cd0a2b9ff245223d56892d494deae6/214_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/214/44cd0a2b9ff245223d56892d494deae6/214_u.jpg"
          },
          {
            "back": "images/cube_2048/215/93878bc6fbf24fcecee7b1847e57592c/215_b.jpg",
            "down": "images/cube_2048/215/93878bc6fbf24fcecee7b1847e57592c/215_d.jpg",
            "front": "images/cube_2048/215/93878bc6fbf24fcecee7b1847e57592c/215_f.jpg",
            "index": 215,
            "left": "images/cube_2048/215/93878bc6fbf24fcecee7b1847e57592c/215_l.jpg",
            "right": "images/cube_2048/215/93878bc6fbf24fcecee7b1847e57592c/215_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/215/93878bc6fbf24fcecee7b1847e57592c/215_u.jpg"
          },
          {
            "back": "images/cube_2048/216/0152a75a3584c80a4a33e514c6831e61/216_b.jpg",
            "down": "images/cube_2048/216/0152a75a3584c80a4a33e514c6831e61/216_d.jpg",
            "front": "images/cube_2048/216/0152a75a3584c80a4a33e514c6831e61/216_f.jpg",
            "index": 216,
            "left": "images/cube_2048/216/0152a75a3584c80a4a33e514c6831e61/216_l.jpg",
            "right": "images/cube_2048/216/0152a75a3584c80a4a33e514c6831e61/216_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/216/0152a75a3584c80a4a33e514c6831e61/216_u.jpg"
          },
          {
            "back": "images/cube_2048/217/b18f1f95ef78079eeb05a6b945b74919/217_b.jpg",
            "down": "images/cube_2048/217/b18f1f95ef78079eeb05a6b945b74919/217_d.jpg",
            "front": "images/cube_2048/217/b18f1f95ef78079eeb05a6b945b74919/217_f.jpg",
            "index": 217,
            "left": "images/cube_2048/217/b18f1f95ef78079eeb05a6b945b74919/217_l.jpg",
            "right": "images/cube_2048/217/b18f1f95ef78079eeb05a6b945b74919/217_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/217/b18f1f95ef78079eeb05a6b945b74919/217_u.jpg"
          },
          {
            "back": "images/cube_2048/218/ec3d91bdce3cc87c28d0c3c582fb402f/218_b.jpg",
            "down": "images/cube_2048/218/ec3d91bdce3cc87c28d0c3c582fb402f/218_d.jpg",
            "front": "images/cube_2048/218/ec3d91bdce3cc87c28d0c3c582fb402f/218_f.jpg",
            "index": 218,
            "left": "images/cube_2048/218/ec3d91bdce3cc87c28d0c3c582fb402f/218_l.jpg",
            "right": "images/cube_2048/218/ec3d91bdce3cc87c28d0c3c582fb402f/218_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/218/ec3d91bdce3cc87c28d0c3c582fb402f/218_u.jpg"
          },
          {
            "back": "images/cube_2048/219/524f5cc54c1333da6e1048528fa1d24e/219_b.jpg",
            "down": "images/cube_2048/219/524f5cc54c1333da6e1048528fa1d24e/219_d.jpg",
            "front": "images/cube_2048/219/524f5cc54c1333da6e1048528fa1d24e/219_f.jpg",
            "index": 219,
            "left": "images/cube_2048/219/524f5cc54c1333da6e1048528fa1d24e/219_l.jpg",
            "right": "images/cube_2048/219/524f5cc54c1333da6e1048528fa1d24e/219_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/219/524f5cc54c1333da6e1048528fa1d24e/219_u.jpg"
          },
          {
            "back": "images/cube_2048/220/a7b861f4a94611607aaf9fb51abfe75c/220_b.jpg",
            "down": "images/cube_2048/220/a7b861f4a94611607aaf9fb51abfe75c/220_d.jpg",
            "front": "images/cube_2048/220/a7b861f4a94611607aaf9fb51abfe75c/220_f.jpg",
            "index": 220,
            "left": "images/cube_2048/220/a7b861f4a94611607aaf9fb51abfe75c/220_l.jpg",
            "right": "images/cube_2048/220/a7b861f4a94611607aaf9fb51abfe75c/220_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/220/a7b861f4a94611607aaf9fb51abfe75c/220_u.jpg"
          },
          {
            "back": "images/cube_2048/221/caf70d40888b36cdd38f4efe86af0ca1/221_b.jpg",
            "down": "images/cube_2048/221/caf70d40888b36cdd38f4efe86af0ca1/221_d.jpg",
            "front": "images/cube_2048/221/caf70d40888b36cdd38f4efe86af0ca1/221_f.jpg",
            "index": 221,
            "left": "images/cube_2048/221/caf70d40888b36cdd38f4efe86af0ca1/221_l.jpg",
            "right": "images/cube_2048/221/caf70d40888b36cdd38f4efe86af0ca1/221_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/221/caf70d40888b36cdd38f4efe86af0ca1/221_u.jpg"
          },
          {
            "back": "images/cube_2048/222/ed0691f3c9c3ec9b58b0b072d3eb3f49/222_b.jpg",
            "down": "images/cube_2048/222/ed0691f3c9c3ec9b58b0b072d3eb3f49/222_d.jpg",
            "front": "images/cube_2048/222/ed0691f3c9c3ec9b58b0b072d3eb3f49/222_f.jpg",
            "index": 222,
            "left": "images/cube_2048/222/ed0691f3c9c3ec9b58b0b072d3eb3f49/222_l.jpg",
            "right": "images/cube_2048/222/ed0691f3c9c3ec9b58b0b072d3eb3f49/222_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/222/ed0691f3c9c3ec9b58b0b072d3eb3f49/222_u.jpg"
          },
          {
            "back": "images/cube_2048/223/26320b52fc908ed2d00767a55b15fdfa/223_b.jpg",
            "down": "images/cube_2048/223/26320b52fc908ed2d00767a55b15fdfa/223_d.jpg",
            "front": "images/cube_2048/223/26320b52fc908ed2d00767a55b15fdfa/223_f.jpg",
            "index": 223,
            "left": "images/cube_2048/223/26320b52fc908ed2d00767a55b15fdfa/223_l.jpg",
            "right": "images/cube_2048/223/26320b52fc908ed2d00767a55b15fdfa/223_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/223/26320b52fc908ed2d00767a55b15fdfa/223_u.jpg"
          },
          {
            "back": "images/cube_2048/224/4fb9f905e0dda53d7ea51226d10b5444/224_b.jpg",
            "down": "images/cube_2048/224/4fb9f905e0dda53d7ea51226d10b5444/224_d.jpg",
            "front": "images/cube_2048/224/4fb9f905e0dda53d7ea51226d10b5444/224_f.jpg",
            "index": 224,
            "left": "images/cube_2048/224/4fb9f905e0dda53d7ea51226d10b5444/224_l.jpg",
            "right": "images/cube_2048/224/4fb9f905e0dda53d7ea51226d10b5444/224_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/224/4fb9f905e0dda53d7ea51226d10b5444/224_u.jpg"
          },
          {
            "back": "images/cube_2048/225/aff8f7166034274bb14a04737668126d/225_b.jpg",
            "down": "images/cube_2048/225/aff8f7166034274bb14a04737668126d/225_d.jpg",
            "front": "images/cube_2048/225/aff8f7166034274bb14a04737668126d/225_f.jpg",
            "index": 225,
            "left": "images/cube_2048/225/aff8f7166034274bb14a04737668126d/225_l.jpg",
            "right": "images/cube_2048/225/aff8f7166034274bb14a04737668126d/225_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/225/aff8f7166034274bb14a04737668126d/225_u.jpg"
          },
          {
            "back": "images/cube_2048/226/ba0c188c61b69a4840760021e755c51d/226_b.jpg",
            "down": "images/cube_2048/226/ba0c188c61b69a4840760021e755c51d/226_d.jpg",
            "front": "images/cube_2048/226/ba0c188c61b69a4840760021e755c51d/226_f.jpg",
            "index": 226,
            "left": "images/cube_2048/226/ba0c188c61b69a4840760021e755c51d/226_l.jpg",
            "right": "images/cube_2048/226/ba0c188c61b69a4840760021e755c51d/226_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/226/ba0c188c61b69a4840760021e755c51d/226_u.jpg"
          },
          {
            "back": "images/cube_2048/227/fbd534401a1f5f4ded1a4c4c932109d4/227_b.jpg",
            "down": "images/cube_2048/227/fbd534401a1f5f4ded1a4c4c932109d4/227_d.jpg",
            "front": "images/cube_2048/227/fbd534401a1f5f4ded1a4c4c932109d4/227_f.jpg",
            "index": 227,
            "left": "images/cube_2048/227/fbd534401a1f5f4ded1a4c4c932109d4/227_l.jpg",
            "right": "images/cube_2048/227/fbd534401a1f5f4ded1a4c4c932109d4/227_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/227/fbd534401a1f5f4ded1a4c4c932109d4/227_u.jpg"
          },
          {
            "back": "images/cube_2048/228/d77714cea6becd7a935ca408c8eaa2ec/228_b.jpg",
            "down": "images/cube_2048/228/d77714cea6becd7a935ca408c8eaa2ec/228_d.jpg",
            "front": "images/cube_2048/228/d77714cea6becd7a935ca408c8eaa2ec/228_f.jpg",
            "index": 228,
            "left": "images/cube_2048/228/d77714cea6becd7a935ca408c8eaa2ec/228_l.jpg",
            "right": "images/cube_2048/228/d77714cea6becd7a935ca408c8eaa2ec/228_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/228/d77714cea6becd7a935ca408c8eaa2ec/228_u.jpg"
          },
          {
            "back": "images/cube_2048/229/e4e6089d76de76da14c8986873d72fa6/229_b.jpg",
            "down": "images/cube_2048/229/e4e6089d76de76da14c8986873d72fa6/229_d.jpg",
            "front": "images/cube_2048/229/e4e6089d76de76da14c8986873d72fa6/229_f.jpg",
            "index": 229,
            "left": "images/cube_2048/229/e4e6089d76de76da14c8986873d72fa6/229_l.jpg",
            "right": "images/cube_2048/229/e4e6089d76de76da14c8986873d72fa6/229_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/229/e4e6089d76de76da14c8986873d72fa6/229_u.jpg"
          },
          {
            "back": "images/cube_2048/230/112f37c83688e9cd2ba1daf67837e89a/230_b.jpg",
            "down": "images/cube_2048/230/112f37c83688e9cd2ba1daf67837e89a/230_d.jpg",
            "front": "images/cube_2048/230/112f37c83688e9cd2ba1daf67837e89a/230_f.jpg",
            "index": 230,
            "left": "images/cube_2048/230/112f37c83688e9cd2ba1daf67837e89a/230_l.jpg",
            "right": "images/cube_2048/230/112f37c83688e9cd2ba1daf67837e89a/230_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/230/112f37c83688e9cd2ba1daf67837e89a/230_u.jpg"
          },
          {
            "back": "images/cube_2048/231/4b9bf8e3a61601ffe74b0a14081a08f8/231_b.jpg",
            "down": "images/cube_2048/231/4b9bf8e3a61601ffe74b0a14081a08f8/231_d.jpg",
            "front": "images/cube_2048/231/4b9bf8e3a61601ffe74b0a14081a08f8/231_f.jpg",
            "index": 231,
            "left": "images/cube_2048/231/4b9bf8e3a61601ffe74b0a14081a08f8/231_l.jpg",
            "right": "images/cube_2048/231/4b9bf8e3a61601ffe74b0a14081a08f8/231_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/231/4b9bf8e3a61601ffe74b0a14081a08f8/231_u.jpg"
          },
          {
            "back": "images/cube_2048/232/c7acd6f2f330bdb55dbc99d87cc52f68/232_b.jpg",
            "down": "images/cube_2048/232/c7acd6f2f330bdb55dbc99d87cc52f68/232_d.jpg",
            "front": "images/cube_2048/232/c7acd6f2f330bdb55dbc99d87cc52f68/232_f.jpg",
            "index": 232,
            "left": "images/cube_2048/232/c7acd6f2f330bdb55dbc99d87cc52f68/232_l.jpg",
            "right": "images/cube_2048/232/c7acd6f2f330bdb55dbc99d87cc52f68/232_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/232/c7acd6f2f330bdb55dbc99d87cc52f68/232_u.jpg"
          },
          {
            "back": "images/cube_2048/233/95ecce7539adecf33393e602c6b12f0c/233_b.jpg",
            "down": "images/cube_2048/233/95ecce7539adecf33393e602c6b12f0c/233_d.jpg",
            "front": "images/cube_2048/233/95ecce7539adecf33393e602c6b12f0c/233_f.jpg",
            "index": 233,
            "left": "images/cube_2048/233/95ecce7539adecf33393e602c6b12f0c/233_l.jpg",
            "right": "images/cube_2048/233/95ecce7539adecf33393e602c6b12f0c/233_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/233/95ecce7539adecf33393e602c6b12f0c/233_u.jpg"
          },
          {
            "back": "images/cube_2048/234/99f1c4b7b53a8914caa625118e5e9916/234_b.jpg",
            "down": "images/cube_2048/234/99f1c4b7b53a8914caa625118e5e9916/234_d.jpg",
            "front": "images/cube_2048/234/99f1c4b7b53a8914caa625118e5e9916/234_f.jpg",
            "index": 234,
            "left": "images/cube_2048/234/99f1c4b7b53a8914caa625118e5e9916/234_l.jpg",
            "right": "images/cube_2048/234/99f1c4b7b53a8914caa625118e5e9916/234_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/234/99f1c4b7b53a8914caa625118e5e9916/234_u.jpg"
          },
          {
            "back": "images/cube_2048/235/59202e529bc77e81078f353ea1eb99c0/235_b.jpg",
            "down": "images/cube_2048/235/59202e529bc77e81078f353ea1eb99c0/235_d.jpg",
            "front": "images/cube_2048/235/59202e529bc77e81078f353ea1eb99c0/235_f.jpg",
            "index": 235,
            "left": "images/cube_2048/235/59202e529bc77e81078f353ea1eb99c0/235_l.jpg",
            "right": "images/cube_2048/235/59202e529bc77e81078f353ea1eb99c0/235_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/235/59202e529bc77e81078f353ea1eb99c0/235_u.jpg"
          },
          {
            "back": "images/cube_2048/236/acb32da1d302b08ec8d861098bf31035/236_b.jpg",
            "down": "images/cube_2048/236/acb32da1d302b08ec8d861098bf31035/236_d.jpg",
            "front": "images/cube_2048/236/acb32da1d302b08ec8d861098bf31035/236_f.jpg",
            "index": 236,
            "left": "images/cube_2048/236/acb32da1d302b08ec8d861098bf31035/236_l.jpg",
            "right": "images/cube_2048/236/acb32da1d302b08ec8d861098bf31035/236_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/236/acb32da1d302b08ec8d861098bf31035/236_u.jpg"
          },
          {
            "back": "images/cube_2048/237/10d0e3b25cd801eefbe0d9db6ae05eb4/237_b.jpg",
            "down": "images/cube_2048/237/10d0e3b25cd801eefbe0d9db6ae05eb4/237_d.jpg",
            "front": "images/cube_2048/237/10d0e3b25cd801eefbe0d9db6ae05eb4/237_f.jpg",
            "index": 237,
            "left": "images/cube_2048/237/10d0e3b25cd801eefbe0d9db6ae05eb4/237_l.jpg",
            "right": "images/cube_2048/237/10d0e3b25cd801eefbe0d9db6ae05eb4/237_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/237/10d0e3b25cd801eefbe0d9db6ae05eb4/237_u.jpg"
          },
          {
            "back": "images/cube_2048/238/52805ff29162e65e71e32e7e0f387e7a/238_b.jpg",
            "down": "images/cube_2048/238/52805ff29162e65e71e32e7e0f387e7a/238_d.jpg",
            "front": "images/cube_2048/238/52805ff29162e65e71e32e7e0f387e7a/238_f.jpg",
            "index": 238,
            "left": "images/cube_2048/238/52805ff29162e65e71e32e7e0f387e7a/238_l.jpg",
            "right": "images/cube_2048/238/52805ff29162e65e71e32e7e0f387e7a/238_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/238/52805ff29162e65e71e32e7e0f387e7a/238_u.jpg"
          },
          {
            "back": "images/cube_2048/239/6c8554bf83d88e82cacafcb3ec530070/239_b.jpg",
            "down": "images/cube_2048/239/6c8554bf83d88e82cacafcb3ec530070/239_d.jpg",
            "front": "images/cube_2048/239/6c8554bf83d88e82cacafcb3ec530070/239_f.jpg",
            "index": 239,
            "left": "images/cube_2048/239/6c8554bf83d88e82cacafcb3ec530070/239_l.jpg",
            "right": "images/cube_2048/239/6c8554bf83d88e82cacafcb3ec530070/239_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/239/6c8554bf83d88e82cacafcb3ec530070/239_u.jpg"
          },
          {
            "back": "images/cube_2048/240/f10df3c96bb2ec7e002b1d6d68f15ba5/240_b.jpg",
            "down": "images/cube_2048/240/f10df3c96bb2ec7e002b1d6d68f15ba5/240_d.jpg",
            "front": "images/cube_2048/240/f10df3c96bb2ec7e002b1d6d68f15ba5/240_f.jpg",
            "index": 240,
            "left": "images/cube_2048/240/f10df3c96bb2ec7e002b1d6d68f15ba5/240_l.jpg",
            "right": "images/cube_2048/240/f10df3c96bb2ec7e002b1d6d68f15ba5/240_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/240/f10df3c96bb2ec7e002b1d6d68f15ba5/240_u.jpg"
          },
          {
            "back": "images/cube_2048/241/ad61fcaba405897672231c71364dca16/241_b.jpg",
            "down": "images/cube_2048/241/ad61fcaba405897672231c71364dca16/241_d.jpg",
            "front": "images/cube_2048/241/ad61fcaba405897672231c71364dca16/241_f.jpg",
            "index": 241,
            "left": "images/cube_2048/241/ad61fcaba405897672231c71364dca16/241_l.jpg",
            "right": "images/cube_2048/241/ad61fcaba405897672231c71364dca16/241_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/241/ad61fcaba405897672231c71364dca16/241_u.jpg"
          },
          {
            "back": "images/cube_2048/242/1779671c49fcb998dc33a31a56b61aa7/242_b.jpg",
            "down": "images/cube_2048/242/1779671c49fcb998dc33a31a56b61aa7/242_d.jpg",
            "front": "images/cube_2048/242/1779671c49fcb998dc33a31a56b61aa7/242_f.jpg",
            "index": 242,
            "left": "images/cube_2048/242/1779671c49fcb998dc33a31a56b61aa7/242_l.jpg",
            "right": "images/cube_2048/242/1779671c49fcb998dc33a31a56b61aa7/242_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/242/1779671c49fcb998dc33a31a56b61aa7/242_u.jpg"
          },
          {
            "back": "images/cube_2048/243/3e4893c447140fd49485e164e9d5a82c/243_b.jpg",
            "down": "images/cube_2048/243/3e4893c447140fd49485e164e9d5a82c/243_d.jpg",
            "front": "images/cube_2048/243/3e4893c447140fd49485e164e9d5a82c/243_f.jpg",
            "index": 243,
            "left": "images/cube_2048/243/3e4893c447140fd49485e164e9d5a82c/243_l.jpg",
            "right": "images/cube_2048/243/3e4893c447140fd49485e164e9d5a82c/243_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/243/3e4893c447140fd49485e164e9d5a82c/243_u.jpg"
          },
          {
            "back": "images/cube_2048/244/7538f2ea483b74e544843d600a2317fa/244_b.jpg",
            "down": "images/cube_2048/244/7538f2ea483b74e544843d600a2317fa/244_d.jpg",
            "front": "images/cube_2048/244/7538f2ea483b74e544843d600a2317fa/244_f.jpg",
            "index": 244,
            "left": "images/cube_2048/244/7538f2ea483b74e544843d600a2317fa/244_l.jpg",
            "right": "images/cube_2048/244/7538f2ea483b74e544843d600a2317fa/244_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/244/7538f2ea483b74e544843d600a2317fa/244_u.jpg"
          },
          {
            "back": "images/cube_2048/245/47fe5145779cf1e07ff6e1f4e624d5b6/245_b.jpg",
            "down": "images/cube_2048/245/47fe5145779cf1e07ff6e1f4e624d5b6/245_d.jpg",
            "front": "images/cube_2048/245/47fe5145779cf1e07ff6e1f4e624d5b6/245_f.jpg",
            "index": 245,
            "left": "images/cube_2048/245/47fe5145779cf1e07ff6e1f4e624d5b6/245_l.jpg",
            "right": "images/cube_2048/245/47fe5145779cf1e07ff6e1f4e624d5b6/245_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/245/47fe5145779cf1e07ff6e1f4e624d5b6/245_u.jpg"
          },
          {
            "back": "images/cube_2048/246/46c9adcb95e7b28592847b1c3badb975/246_b.jpg",
            "down": "images/cube_2048/246/46c9adcb95e7b28592847b1c3badb975/246_d.jpg",
            "front": "images/cube_2048/246/46c9adcb95e7b28592847b1c3badb975/246_f.jpg",
            "index": 246,
            "left": "images/cube_2048/246/46c9adcb95e7b28592847b1c3badb975/246_l.jpg",
            "right": "images/cube_2048/246/46c9adcb95e7b28592847b1c3badb975/246_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/246/46c9adcb95e7b28592847b1c3badb975/246_u.jpg"
          },
          {
            "back": "images/cube_2048/247/e0c8062d99154da9bdec659be5cadaab/247_b.jpg",
            "down": "images/cube_2048/247/e0c8062d99154da9bdec659be5cadaab/247_d.jpg",
            "front": "images/cube_2048/247/e0c8062d99154da9bdec659be5cadaab/247_f.jpg",
            "index": 247,
            "left": "images/cube_2048/247/e0c8062d99154da9bdec659be5cadaab/247_l.jpg",
            "right": "images/cube_2048/247/e0c8062d99154da9bdec659be5cadaab/247_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/247/e0c8062d99154da9bdec659be5cadaab/247_u.jpg"
          },
          {
            "back": "images/cube_2048/248/4f19f05e54398a5e4ae7f6454f28ca56/248_b.jpg",
            "down": "images/cube_2048/248/4f19f05e54398a5e4ae7f6454f28ca56/248_d.jpg",
            "front": "images/cube_2048/248/4f19f05e54398a5e4ae7f6454f28ca56/248_f.jpg",
            "index": 248,
            "left": "images/cube_2048/248/4f19f05e54398a5e4ae7f6454f28ca56/248_l.jpg",
            "right": "images/cube_2048/248/4f19f05e54398a5e4ae7f6454f28ca56/248_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/248/4f19f05e54398a5e4ae7f6454f28ca56/248_u.jpg"
          },
          {
            "back": "images/cube_2048/249/615d9c0a60ae3533396f6b0ad63adbb8/249_b.jpg",
            "down": "images/cube_2048/249/615d9c0a60ae3533396f6b0ad63adbb8/249_d.jpg",
            "front": "images/cube_2048/249/615d9c0a60ae3533396f6b0ad63adbb8/249_f.jpg",
            "index": 249,
            "left": "images/cube_2048/249/615d9c0a60ae3533396f6b0ad63adbb8/249_l.jpg",
            "right": "images/cube_2048/249/615d9c0a60ae3533396f6b0ad63adbb8/249_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/249/615d9c0a60ae3533396f6b0ad63adbb8/249_u.jpg"
          },
          {
            "back": "images/cube_2048/250/94ade0d85e29f0d053fffc1546319baa/250_b.jpg",
            "down": "images/cube_2048/250/94ade0d85e29f0d053fffc1546319baa/250_d.jpg",
            "front": "images/cube_2048/250/94ade0d85e29f0d053fffc1546319baa/250_f.jpg",
            "index": 250,
            "left": "images/cube_2048/250/94ade0d85e29f0d053fffc1546319baa/250_l.jpg",
            "right": "images/cube_2048/250/94ade0d85e29f0d053fffc1546319baa/250_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/250/94ade0d85e29f0d053fffc1546319baa/250_u.jpg"
          },
          {
            "back": "images/cube_2048/251/5f0239b6f192fe1b438c604c010dc2b5/251_b.jpg",
            "down": "images/cube_2048/251/5f0239b6f192fe1b438c604c010dc2b5/251_d.jpg",
            "front": "images/cube_2048/251/5f0239b6f192fe1b438c604c010dc2b5/251_f.jpg",
            "index": 251,
            "left": "images/cube_2048/251/5f0239b6f192fe1b438c604c010dc2b5/251_l.jpg",
            "right": "images/cube_2048/251/5f0239b6f192fe1b438c604c010dc2b5/251_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/251/5f0239b6f192fe1b438c604c010dc2b5/251_u.jpg"
          },
          {
            "back": "images/cube_2048/252/4a60cac7304296d31187b84a88eaa177/252_b.jpg",
            "down": "images/cube_2048/252/4a60cac7304296d31187b84a88eaa177/252_d.jpg",
            "front": "images/cube_2048/252/4a60cac7304296d31187b84a88eaa177/252_f.jpg",
            "index": 252,
            "left": "images/cube_2048/252/4a60cac7304296d31187b84a88eaa177/252_l.jpg",
            "right": "images/cube_2048/252/4a60cac7304296d31187b84a88eaa177/252_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/252/4a60cac7304296d31187b84a88eaa177/252_u.jpg"
          },
          {
            "back": "images/cube_2048/253/ad6d86762327ab063180d1623b328a0a/253_b.jpg",
            "down": "images/cube_2048/253/ad6d86762327ab063180d1623b328a0a/253_d.jpg",
            "front": "images/cube_2048/253/ad6d86762327ab063180d1623b328a0a/253_f.jpg",
            "index": 253,
            "left": "images/cube_2048/253/ad6d86762327ab063180d1623b328a0a/253_l.jpg",
            "right": "images/cube_2048/253/ad6d86762327ab063180d1623b328a0a/253_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/253/ad6d86762327ab063180d1623b328a0a/253_u.jpg"
          },
          {
            "back": "images/cube_2048/254/53a23051af23788fb9dbd6b0619d254a/254_b.jpg",
            "down": "images/cube_2048/254/53a23051af23788fb9dbd6b0619d254a/254_d.jpg",
            "front": "images/cube_2048/254/53a23051af23788fb9dbd6b0619d254a/254_f.jpg",
            "index": 254,
            "left": "images/cube_2048/254/53a23051af23788fb9dbd6b0619d254a/254_l.jpg",
            "right": "images/cube_2048/254/53a23051af23788fb9dbd6b0619d254a/254_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/254/53a23051af23788fb9dbd6b0619d254a/254_u.jpg"
          },
          {
            "back": "images/cube_2048/255/f07140157f7e2cfa961a23850a2328d7/255_b.jpg",
            "down": "images/cube_2048/255/f07140157f7e2cfa961a23850a2328d7/255_d.jpg",
            "front": "images/cube_2048/255/f07140157f7e2cfa961a23850a2328d7/255_f.jpg",
            "index": 255,
            "left": "images/cube_2048/255/f07140157f7e2cfa961a23850a2328d7/255_l.jpg",
            "right": "images/cube_2048/255/f07140157f7e2cfa961a23850a2328d7/255_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/255/f07140157f7e2cfa961a23850a2328d7/255_u.jpg"
          },
          {
            "back": "images/cube_2048/256/a4a62144dafc8f4a290e9629863b9dba/256_b.jpg",
            "down": "images/cube_2048/256/a4a62144dafc8f4a290e9629863b9dba/256_d.jpg",
            "front": "images/cube_2048/256/a4a62144dafc8f4a290e9629863b9dba/256_f.jpg",
            "index": 256,
            "left": "images/cube_2048/256/a4a62144dafc8f4a290e9629863b9dba/256_l.jpg",
            "right": "images/cube_2048/256/a4a62144dafc8f4a290e9629863b9dba/256_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/256/a4a62144dafc8f4a290e9629863b9dba/256_u.jpg"
          },
          {
            "back": "images/cube_2048/257/e439d9d224c963dc4f0676c11e05ec5d/257_b.jpg",
            "down": "images/cube_2048/257/e439d9d224c963dc4f0676c11e05ec5d/257_d.jpg",
            "front": "images/cube_2048/257/e439d9d224c963dc4f0676c11e05ec5d/257_f.jpg",
            "index": 257,
            "left": "images/cube_2048/257/e439d9d224c963dc4f0676c11e05ec5d/257_l.jpg",
            "right": "images/cube_2048/257/e439d9d224c963dc4f0676c11e05ec5d/257_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/257/e439d9d224c963dc4f0676c11e05ec5d/257_u.jpg"
          },
          {
            "back": "images/cube_2048/258/6b740666569d960a1d038e331d3a9159/258_b.jpg",
            "down": "images/cube_2048/258/6b740666569d960a1d038e331d3a9159/258_d.jpg",
            "front": "images/cube_2048/258/6b740666569d960a1d038e331d3a9159/258_f.jpg",
            "index": 258,
            "left": "images/cube_2048/258/6b740666569d960a1d038e331d3a9159/258_l.jpg",
            "right": "images/cube_2048/258/6b740666569d960a1d038e331d3a9159/258_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/258/6b740666569d960a1d038e331d3a9159/258_u.jpg"
          },
          {
            "back": "images/cube_2048/259/221e24e27515cc5075017ec458d188f1/259_b.jpg",
            "down": "images/cube_2048/259/221e24e27515cc5075017ec458d188f1/259_d.jpg",
            "front": "images/cube_2048/259/221e24e27515cc5075017ec458d188f1/259_f.jpg",
            "index": 259,
            "left": "images/cube_2048/259/221e24e27515cc5075017ec458d188f1/259_l.jpg",
            "right": "images/cube_2048/259/221e24e27515cc5075017ec458d188f1/259_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/259/221e24e27515cc5075017ec458d188f1/259_u.jpg"
          },
          {
            "back": "images/cube_2048/260/f42b9519fa42b7a119da807d84b57459/260_b.jpg",
            "down": "images/cube_2048/260/f42b9519fa42b7a119da807d84b57459/260_d.jpg",
            "front": "images/cube_2048/260/f42b9519fa42b7a119da807d84b57459/260_f.jpg",
            "index": 260,
            "left": "images/cube_2048/260/f42b9519fa42b7a119da807d84b57459/260_l.jpg",
            "right": "images/cube_2048/260/f42b9519fa42b7a119da807d84b57459/260_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/260/f42b9519fa42b7a119da807d84b57459/260_u.jpg"
          },
          {
            "back": "images/cube_2048/261/0b8d464393980f2112e575fe282396e0/261_b.jpg",
            "down": "images/cube_2048/261/0b8d464393980f2112e575fe282396e0/261_d.jpg",
            "front": "images/cube_2048/261/0b8d464393980f2112e575fe282396e0/261_f.jpg",
            "index": 261,
            "left": "images/cube_2048/261/0b8d464393980f2112e575fe282396e0/261_l.jpg",
            "right": "images/cube_2048/261/0b8d464393980f2112e575fe282396e0/261_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/261/0b8d464393980f2112e575fe282396e0/261_u.jpg"
          },
          {
            "back": "images/cube_2048/262/924f43cfb01606a16d400772ed9593f5/262_b.jpg",
            "down": "images/cube_2048/262/924f43cfb01606a16d400772ed9593f5/262_d.jpg",
            "front": "images/cube_2048/262/924f43cfb01606a16d400772ed9593f5/262_f.jpg",
            "index": 262,
            "left": "images/cube_2048/262/924f43cfb01606a16d400772ed9593f5/262_l.jpg",
            "right": "images/cube_2048/262/924f43cfb01606a16d400772ed9593f5/262_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/262/924f43cfb01606a16d400772ed9593f5/262_u.jpg"
          },
          {
            "back": "images/cube_2048/263/cb2a6df497463ef6cfa0a876f3dfb456/263_b.jpg",
            "down": "images/cube_2048/263/cb2a6df497463ef6cfa0a876f3dfb456/263_d.jpg",
            "front": "images/cube_2048/263/cb2a6df497463ef6cfa0a876f3dfb456/263_f.jpg",
            "index": 263,
            "left": "images/cube_2048/263/cb2a6df497463ef6cfa0a876f3dfb456/263_l.jpg",
            "right": "images/cube_2048/263/cb2a6df497463ef6cfa0a876f3dfb456/263_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/263/cb2a6df497463ef6cfa0a876f3dfb456/263_u.jpg"
          },
          {
            "back": "images/cube_2048/264/66313e8105bafb272594bd2fce9b0704/264_b.jpg",
            "down": "images/cube_2048/264/66313e8105bafb272594bd2fce9b0704/264_d.jpg",
            "front": "images/cube_2048/264/66313e8105bafb272594bd2fce9b0704/264_f.jpg",
            "index": 264,
            "left": "images/cube_2048/264/66313e8105bafb272594bd2fce9b0704/264_l.jpg",
            "right": "images/cube_2048/264/66313e8105bafb272594bd2fce9b0704/264_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/264/66313e8105bafb272594bd2fce9b0704/264_u.jpg"
          },
          {
            "back": "images/cube_2048/265/fe92ce117220053b674ef3df92d3090a/265_b.jpg",
            "down": "images/cube_2048/265/fe92ce117220053b674ef3df92d3090a/265_d.jpg",
            "front": "images/cube_2048/265/fe92ce117220053b674ef3df92d3090a/265_f.jpg",
            "index": 265,
            "left": "images/cube_2048/265/fe92ce117220053b674ef3df92d3090a/265_l.jpg",
            "right": "images/cube_2048/265/fe92ce117220053b674ef3df92d3090a/265_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/265/fe92ce117220053b674ef3df92d3090a/265_u.jpg"
          },
          {
            "back": "images/cube_2048/266/b2c5f1c100ec20ea060d46b06bfb713f/266_b.jpg",
            "down": "images/cube_2048/266/b2c5f1c100ec20ea060d46b06bfb713f/266_d.jpg",
            "front": "images/cube_2048/266/b2c5f1c100ec20ea060d46b06bfb713f/266_f.jpg",
            "index": 266,
            "left": "images/cube_2048/266/b2c5f1c100ec20ea060d46b06bfb713f/266_l.jpg",
            "right": "images/cube_2048/266/b2c5f1c100ec20ea060d46b06bfb713f/266_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/266/b2c5f1c100ec20ea060d46b06bfb713f/266_u.jpg"
          },
          {
            "back": "images/cube_2048/267/731dfa9e468f6340d08a9ea5f08c977d/267_b.jpg",
            "down": "images/cube_2048/267/731dfa9e468f6340d08a9ea5f08c977d/267_d.jpg",
            "front": "images/cube_2048/267/731dfa9e468f6340d08a9ea5f08c977d/267_f.jpg",
            "index": 267,
            "left": "images/cube_2048/267/731dfa9e468f6340d08a9ea5f08c977d/267_l.jpg",
            "right": "images/cube_2048/267/731dfa9e468f6340d08a9ea5f08c977d/267_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/267/731dfa9e468f6340d08a9ea5f08c977d/267_u.jpg"
          },
          {
            "back": "images/cube_2048/268/7cd7f2eb5cd1ff29b5f9c1ee853cb750/268_b.jpg",
            "down": "images/cube_2048/268/7cd7f2eb5cd1ff29b5f9c1ee853cb750/268_d.jpg",
            "front": "images/cube_2048/268/7cd7f2eb5cd1ff29b5f9c1ee853cb750/268_f.jpg",
            "index": 268,
            "left": "images/cube_2048/268/7cd7f2eb5cd1ff29b5f9c1ee853cb750/268_l.jpg",
            "right": "images/cube_2048/268/7cd7f2eb5cd1ff29b5f9c1ee853cb750/268_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/268/7cd7f2eb5cd1ff29b5f9c1ee853cb750/268_u.jpg"
          },
          {
            "back": "images/cube_2048/269/d773f13c9bdb25fe46b4fcab571f804e/269_b.jpg",
            "down": "images/cube_2048/269/d773f13c9bdb25fe46b4fcab571f804e/269_d.jpg",
            "front": "images/cube_2048/269/d773f13c9bdb25fe46b4fcab571f804e/269_f.jpg",
            "index": 269,
            "left": "images/cube_2048/269/d773f13c9bdb25fe46b4fcab571f804e/269_l.jpg",
            "right": "images/cube_2048/269/d773f13c9bdb25fe46b4fcab571f804e/269_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/269/d773f13c9bdb25fe46b4fcab571f804e/269_u.jpg"
          },
          {
            "back": "images/cube_2048/270/06377d84674ea295c398e32c28e6334d/270_b.jpg",
            "down": "images/cube_2048/270/06377d84674ea295c398e32c28e6334d/270_d.jpg",
            "front": "images/cube_2048/270/06377d84674ea295c398e32c28e6334d/270_f.jpg",
            "index": 270,
            "left": "images/cube_2048/270/06377d84674ea295c398e32c28e6334d/270_l.jpg",
            "right": "images/cube_2048/270/06377d84674ea295c398e32c28e6334d/270_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/270/06377d84674ea295c398e32c28e6334d/270_u.jpg"
          },
          {
            "back": "images/cube_2048/271/fdce6236f8b80e9a3e003dc250af0c9b/271_b.jpg",
            "down": "images/cube_2048/271/fdce6236f8b80e9a3e003dc250af0c9b/271_d.jpg",
            "front": "images/cube_2048/271/fdce6236f8b80e9a3e003dc250af0c9b/271_f.jpg",
            "index": 271,
            "left": "images/cube_2048/271/fdce6236f8b80e9a3e003dc250af0c9b/271_l.jpg",
            "right": "images/cube_2048/271/fdce6236f8b80e9a3e003dc250af0c9b/271_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/271/fdce6236f8b80e9a3e003dc250af0c9b/271_u.jpg"
          },
          {
            "back": "images/cube_2048/272/1b30ca17dccc8b5fac247a76d95c09cc/272_b.jpg",
            "down": "images/cube_2048/272/1b30ca17dccc8b5fac247a76d95c09cc/272_d.jpg",
            "front": "images/cube_2048/272/1b30ca17dccc8b5fac247a76d95c09cc/272_f.jpg",
            "index": 272,
            "left": "images/cube_2048/272/1b30ca17dccc8b5fac247a76d95c09cc/272_l.jpg",
            "right": "images/cube_2048/272/1b30ca17dccc8b5fac247a76d95c09cc/272_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/272/1b30ca17dccc8b5fac247a76d95c09cc/272_u.jpg"
          },
          {
            "back": "images/cube_2048/273/9783f2d12b8ec4371131ea879643f647/273_b.jpg",
            "down": "images/cube_2048/273/9783f2d12b8ec4371131ea879643f647/273_d.jpg",
            "front": "images/cube_2048/273/9783f2d12b8ec4371131ea879643f647/273_f.jpg",
            "index": 273,
            "left": "images/cube_2048/273/9783f2d12b8ec4371131ea879643f647/273_l.jpg",
            "right": "images/cube_2048/273/9783f2d12b8ec4371131ea879643f647/273_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/273/9783f2d12b8ec4371131ea879643f647/273_u.jpg"
          },
          {
            "back": "images/cube_2048/274/b14199f4170c51b12fea90986048a90a/274_b.jpg",
            "down": "images/cube_2048/274/b14199f4170c51b12fea90986048a90a/274_d.jpg",
            "front": "images/cube_2048/274/b14199f4170c51b12fea90986048a90a/274_f.jpg",
            "index": 274,
            "left": "images/cube_2048/274/b14199f4170c51b12fea90986048a90a/274_l.jpg",
            "right": "images/cube_2048/274/b14199f4170c51b12fea90986048a90a/274_r.jpg",
            "tiles": [
              1,
              2
            ],
            "up": "images/cube_2048/274/b14199f4170c51b12fea90986048a90a/274_u.jpg"
          }
        ]
      },
      "picture_url": "",
      "title_picture_url": "",
      "vr_code": "80jGKlDrlVWj6M1XJA",
      "vr_type": "reality"
    }
  }
]

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [
      ModelViewPlugin,
      'modelViewPlugin'
    ]
  ]
});

const App: React.FC = () => {
  const size = useWindowDimensions();
  // const work = useFetchDatas(DATA_TYPES.WORK)

  const work = works[0].data
  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size} />
    <MiniModelPanel />
  </FiveProvider>;
};

export default App ;

