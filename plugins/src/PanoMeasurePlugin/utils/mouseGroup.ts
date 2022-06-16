import {
  CurvePath,
  DoubleSide,
  Group,
  LineCurve3,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  SphereGeometry,
  sRGBEncoding,
  TextureLoader,
  TubeGeometry,
  Vector3,
} from 'three'

const planTextureUrl = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAYAAACJIC3tAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA2KADAAQAAAABAAAA2AAAAADs6jNqAAAZH0lEQVR4Ae1dS68kyVmNet17e6Z7TNPqQX5ICNB4MfMDLASGsUCsQLBhZSRbQpYAsWLHapoVO1YIW7KQjAQrNiBYIZBtDAv29iyYBUICW5qm3Zru6e77qAfnfF98lVn31XUb4YxPeaK7KiMj43HyO3Hqi4yMzFuKgiwgC8gCY7bAppTJmM8/87nPM4MfDfbfLNPNOwU6Q3gbYvtrbLE/eVDWlqavZi0ggTVLTQ/YOxDV98u0pmwgrlL3JbCemVqMSmAtsnIe06MyK4dIfAufD+pB7is0b4H4VWwe6KgBnkBgc3iw/8DnXo0zTaF5C0hgzVMEgBTXJyAoiurDGmeaQvMW0BCxeYoA8I55qw22k/Ickx2PkPZmBuDCKIFl6AMnENYT81wFUtuUI+wfZwAujBJYhj5wBln9GICeQli36nT9kwzAhVECy9AHpvBeZxDXKcRFkR2a0DIgHz1GCSxDFziya7CCoaFCMgtoJioDYUsIbAIvxu0LbBnnVqF5C8iDNU8RALq4SllgiBjxgwzAhVECy9AHVpDVHJ+Vic0RL+tkRwb8I8YogWUgf4GhIUXGKXoGxunNFJq3gATWPEUAuIK0GOjB5hAWZxFXEpjZpPEvCaxxggwePVgMCSkyfhRSWEACy0DTKWYMY3jI+UQGebAMzGHAodC+BThzSKZO8eETYFMMD7XYt33egFACS0FTvedF70XPFWLLgX3UKCWwDPTPMUA8g7DWNntYLM5pe4XmLSCBNU8RAJ7ZNRgF5VPzE4iLglNo3gISWPMUAeAM/xj4HbOJszpstAP6atUCElirzPRxcWgYw0N6sZhJ7OdRvEkLSGBN0nIOFD0YvRdFFtP1y3N5tNukBSSwJmk5B2pZr8FcXO7NfNB4LqN2W7OABNYaI5fhiWswvQXxMus0nSaBNU1PBcerLt5c5hCxv82AfeQYJbAcHWAKcXnglqzpGqwapO2NBNY2P46Ofqsf+s+F9dMVb84CElhzlFwKiK+94eSG31yOoeKlWZXYkgUksJbYuAoLr8HiEZUJRBZPN1+VX+nNWEACa4aKa4DwYRUGejD6MIqNHk2heQtIYM1TZAA5yUFxhdRcbDmwjxqlBJaB/lUVFj1XDBV1ozkDc3oeLAlL9GA+lxj3wWLCI8UJjBekPFgG7jnJ4QNETnFwuS8Hi7tT9xnOY4QYJbAMpHOIyEkNPs3MoSGfB9M7OTIwpyFiCpZiaoM+K0QmD5aCOnmwDDTFJAex+hAxA2phhAUksAzdwJf6+n0vv/LyFR0ZsI8cowSWoQP4Gnr/Jt61Jjgy0EaMElgGpvxxFc4guufSGo4MrBlGCSwDVT536H+6iCJjzCfsM6AfNUYJLAf9vL0cL23zt0vFio4c+EeLUgLLQb1P1FNUvA8mceVgDSglsAxUxSQHh4X822CcSYwnnDPgHzFGCSwD+b5Uio+odMPEDLiFUR4sRR/g2xAZuMA3vBenORSat4A8WPMUASAHhXH9RbwUma7DaInmgwTWPEUAyBvL8fxXXHvFfgb8I8YogWUgnwt7ee+LgTGPa7lUAu4ksAQkQVD+PFjcXvYVHRwoKjRuAQmscYIqPIqJHiy8Vj+e4wxGilICy0F89weLfImUZhBz8KZp+iQ8dcNBzh52e0ngjxemPFgO7n2SIwaK3VAxB/oRo5TAcpDv0oopel6JyYulYE4CS0ETZhH50hufPXTEMd2RA/9oUUpgGaj3Pxyr58EycHUOowR2ziCN7u4+D+b3w+TDGiWrD0sC61uj1TiXSoWoYuv3xVpFLFzVAhJYjq4Q84fxugDNI+bgTffBUvDEpb6cQaTMfCZRKzlSEKcnmnPQxLWIlBSfB+MQ0VdzaKI+AXsaIiYgCRB9kiMWSHF6Q1McKZiTwDLQxOeY6bcoqxBWiC0D/hFjlMAykB+vDCBWCSsDY1uMEtjWFE1H+Af4uuVR/XjTsAVOAsvRB7ohIvHGcDEH9lGjlMBy0N89D0a8GibmYA0oJbAcVF2cko93dOTAP1qUElgO6rvnwXj9xftg8mIpmJPAMtDkf10lVnFoiJiBs4pRAstBVrfYl/Liig6FFBaQwDLQ5PfB/HkwX8PBazKJLAF3ElgCkuCz/D5YYO3WI0aKto1aQAJrlJgdWPE8WCRywZSmOcIaTW8lsKbp2YLzN9HHoFAziFvDtB6RwFpniPj8T+757KGLbPcFOBnOYaQYJbAcxIcH48DQ/Ze8WArmJLAUNNmzzOHBKLEYLOZAP2KUElgO8n0lR6zg8AkO+bAE3ElgCUgCRC32zcHTBZQS2AWTNJnQLfb1qzANEZuk6SIoCeyiTVpM2V0qxcFh9/KAFvEKU7WABJahK/hfuOyQ+qvbun3FmrWABNYsNT1gcR+sl4SoJjl27dHkngTWJC3nQMXjKiEpXoFpqv6ckdrclcDa5OU8Kp/kiKkNF1rI7Xxe7TdkAQmsITKugdJNcvht5pDaNUV0qAULSGAtsPAyDP73weKqixP1/qbfl5XT8cEtIIENTsFeALohYgwPdQ22l+GGziSBDc3APu13r8723H4PTNdg+9hu4DwS2MAE7Nl8rKb37JLWnmYbPpsENjwHL0cQ98G6CQ4OEDXR8XLLDZ5DAhucgr0AhAfzCQ4WkRfby3BDZ5LAhmZgv/Z9koOi0mLf/SzWSC79DjZCxFUwvvinm1/6/NO/+LsPjn5u8Xj2KRPa3dX3128d/+vZd+586df+6vcn/3RVWaUPbwEJbHgOLkXw5a9t3lqela/jQusXL81QE0Hgt+eL8pVv/M7kg+vy6dgwFpDAhrH7ta3+1p9tPr9Zl7/FcPDutRnj4KQ8nkzLr//l702+E0natmEBCawNHrYo6LnOluXfQlwTMPTu2/75zI97tv/6YSnfet8/m5hLhMgW8/I5ebKtKZuIaJKjCRo6EBwWYs88193XS/ndXynl7U93xxn7mZ/wz89+tpSv/kMpj58hEd6uln2XeRTasIDPTrWBZfQoOKER11z0XJeJq28kCo95mJeBZVmH7+m7BQtMHjzYTL+Fv/779JNlcuegzA7+p8yO8Krm51ieM+M+4ydlBlc3Xdwq0+PTMlsvy2Q6K7MJPjPkm6yQhvXe3K6QD9cDMyjXtquzMp3OyxQP4Vq+FY7h+oK3TmeTNfLN/BjqtPwT1odjlh/HuWVdto9Fr+hLUwyLuNh1ho6F5pE/jiNtM/VjzIN6pmhravn89dOzSAOCqMu3qAOE8H4Tt2xjJ+82nXnYPs4A7TJuGHCct4FnVq7WUfctH9InhoP5kRPnyRfZ9Nue3r1VPnH7sByhrvKFd0r57S8w9vLw598s5Zvf83wfn5TjHz4vT9AWqLC/w2JbtLkC3jU/wLLCcbIAs3oe2JH5kA1bpAOfbXncjm08r9Xrx3jDwOqEjVnPEsc20Q7asLaYJ9qwtmt74MGxsA6URwUrS0Pd4HANwtnuOuqDnQ2zpSEOkrw880zRxrpiIXa2gTTmAbYVCFgvuZ2j3mVZn838GI+DAMtziuOzBfbPDMt6PS8r9Pn16rSsDxB/sUCZZdkcHZTVx8uyOkC5Q3xOgfXWk7J++LysXr+P/WdldR/lHuLzLj7TB++Vzf23y+anf1Am9x/DHAiP+MXwpJSnH6MXHeD0Xivl+XP0HDRyUN9xNF0hHQGANxvQsUH6nF2PafzgC2e5WSJOUXELY26gGMtDQgoT8Zmha7N3w1gTWJsU8pd5Y3mQDiNZGTLJzooNLOPtk0ELsBj+d+WYuQbU42WYhkzoQKgGgZ0CVdZstuGOtdsvXzOgEmLaBnSAKM+zQR/pha5WlvFSPKeKHwUNA7MhMjlalEWU5nXXvqGfF3XMid0qRgUBIdpnrwUSw7Jt3JIqdh4BLrMzo7QxyvCcrV6ksTzjLjlPj/rt3JiftTAP/tHW2+NI4y8mg/GHhmhD+xVlIrEhDSrx8gSCDwxrmFnXti8gj+FAB4i+w62l1X7FKhm1PocI+yN+ta0uHmAfZV9lv53zJ+UA5fmzWQNEuTlB/OAMEBZlQw0cIs7D1AbDx0dlc++ex++/USa4PC7UFLVlsB++7wUePimbw2fI7HlLeaOUO7frDiteVGBIWsCL8cjJKeIEhrCE4PBLsQXH7gJXNrEzxPF574ovonbCdYdC2QoQlmKnm9LMvUBu4PVcSUyHwbnLQML4U8hy/FBIRgYJIonIww87AUg1IlkODVgbAI4ayLfX4ZmtLlTHRM/nRTydyf3yVgcTGXgAH5a1T5QHCGufeXDAOiWi6ASEZyEmNGL/um0/L+qgF60SsvZ5OtZJDX+A9S3Pi9AsMI4E7tsPBQsCv5dHaq+o2ZiFKA62Z5WgLOuoJSzG8tSI1bs9O5bsQpw/uYsfTdbJmig8creOX9Goo26ZzB/n6DsUppVln8LH4rUpiow/9Nzl4Sq8Tfyqse+eoT/TWdQicGldPIRFZwPP5vWclM3t4zKhU6J2qKH4bXzwR7SjWQZHa+rJ6545GqBKo7KTM5zo3Cumshdo/BCKj0CgLtmagp+GJc6CImNLK5wAj1NEPDnG+WtC4/QNER6MtdgvGYxJw4MI55EiBhkmnmpoxk2M2Cch/NgvIcuwPNtgGre1HutFTPDgXQnfzBTlUWL767vtTFHeS1hp5DfDoOyWHLaGtphgLXMX/0gyG/F6mbvichj/92/DjsYY7Fxx/nbuaIfmivNHu4TdBQL1c9r1YEhndcTP/LVq+7UKcVg9KAseugxoz8612ont4mOCY6PGHyMITCdP/TSm2w8mcaIu45DlacXKP39c2X8oHuZnH7DzZwdDYJxiYp9jv7J4HVX1f/AtMzow+/COB4PT2DoTjN5eg7gKnA1HdXQ+y5MyMQ+GZGqn/GQp9GAM773n9i73vwfASKV7Cw+Ga4EJh4jbgIpZdwS6zbMYItatuVd2fgS6XJy0nRC9FKxjYqJBTIQwAE+aeflTQkOEJ6KRaGimmeGrMcGuGZFp7DBmaMRpYIuz95AFhCDe93w/SGQa4vjvAVtGfeiGdDaCtq2tmsV2LAFftiXJNbC8VebHIt2yRR7Ux85jIQ4QAxMCCDoAT8UCp+L3Df28rAP10XZdgE12zoeCM9CWBZb0rCxXsbC81RD1xDYqRT4fIiIBx2ox48ErDfuREwTWF5xYEsobZzhGLlmH0Vdtwot4IAhbokPwvwce4w9vlA/xcJxoP8jIZoKrImMp63OMUGEMPFaPc4jIQM/FOLcxKmM6nQm35ZZ9+xdmbp/2drfR/3RfxVEhDWi6f/iOjxsf3sV4MzzYR6U8O3SVUq30XhCuhVOqGt6L7tOGiNia6uFe7RoMKLfiqSdED8bzMTHwlwTpJJRpNMaqdi0agkZifng8G1uzUTNmzUMySBjKGQkhTIqL6VVjprX4RWSHYLmtAEk4K0ZgGY9xh9pEe6iExHOfx/jzaVbGF7f9MjtxHLJ8LIP/KMzyFKD9AiNu9bKMlUMm5kF8c3wWlPs9LubdJ/CeWATWwbps38/Z8deOa+m0E//jixgZsy0OoiyD53ZDWm1x3I4ixbDD/lUcXgoHrV6vwUDwACrfOX/alm0GNzjO6+4dvrjDNOMYWxhvaz/2C5aNywcTE9tE/2Aa+5L1H/6woz+xj6Eut0kVlV261L7JPsv+yj686F2D0YFYH0d59vnygo2gT+JaDNe6kzu+W+iMYt4irsHs0NYYNaM2w1rAptg35R+Jgh39D3/j4j2w8wjf/+9S/vhv0AG9+7Dj/rLWJ5630nD74XWHQ6CWtxagMKCrbzOBguFNZAroqsBjzBPiYlmJ6yprDZMeI9JhWlerFyzAhbuxVIorNOid9l0qhWH3Vy5UqIRBLYAfPYXWLKDFvq0x8up4NER8ddv9v5Xkqngu3I3h4nUNMQ/zaiX9dVYa7pg82HC236tlTnz8wpNv/P2/3/r5xeP5JzEvhpXAqx+sP/viX87++Y0v/6quufYy42CZJLDBTL9/w5s/KB9idpBT585XjU/+pLy5fy3KOYQFNMkxhNVv2qYvmOV9K97NCZHhbpBC6xaQwFpniPjcd7m4YgVlCC0D/hFjlMAykO/LpenBQmwez4B95BglsBwdoBsaOl4ND3Pwtl36mATuaGHGE0xuAA0P03QEebAcVO16LM395mANKCWwHFRxiEi/FZP1vs2BfdQoJbAc9HfP2MYkPSWm0LwFJLDmKQJAvqGkP2/o0pLAEnAngSUgCRB5DdYNC2PCPgf2UaOUwDLQ7ys4KDF6M4ZObLarr1YtIIG1yswuLp+m7yY6XGy7ebTXoAUksAZJuQSSzyL6gRgg6hrsEkO1liSBtcbIZXh8ksOHhyEr3Qu7zFLNpUlgzVFyKSC/0RzXYLG9NKsSW7KABNYSG1dj6YaIcbNZV2FXW6uhIxJYQ2RcA8Xvg3GSg0NEF9nu8qlrCuvQcBaQwIaz/f4t4y942J0wvkGFsorrsP1rUM6BLCCBDWT4GzXbn+Tw6y+fSbxRJco8hAUksCGsfvM2L05y3LwOlRjAAhLYAEZ/hSb5ZnRf3utrOOwvkbxCPSryI7aABPYjNvgrNud/n9MnOTg85KyiQgILSGAJSAJEF5Q/EabZwxycGUoJLAdZ3TVYDrxCWS0ggWXoCvYXq+vdr+655gzIR49RAsvQBeKFoxwoxl8T0FrEDMzpnRwpWOI1GAXl98Dkw5KQRpjyYDnI8mswfx7MEetWcwrmJLAUNOGdHL4GkWjdj+XAPXqUEliGLtB/6Y3f//JhYgbsI8cogWXoAFzsS0kx8C+EMb5BmkLzFpDAmqcIACmm/sqNbriYAf2oMUpgGeinwGIG0Z8Go+j6kstwFqPEKIFloJ33wbqlvrGqw4eMGfCPGKMEloF8TnKc91eSVwbmdB8sBUu80RwrOAiYPkxDxBTUyYOloAkeLK7CiFc3mXOwBpQSWA6q3IPFxPz54WKOcxglSgksA+1+H4wLff155liNmAH7yDFKYBk6AN8p5dJytCG0DNhHjlECy9ABJmUJmN28oQ8RNVBMwJ0EloAkQPSlUn4vjDOIndhy4B8tSgksB/Uxh8j5Q3qu2OZAP2KUElgG8mN5b/it2GbAPnKMEliGDjCxv9HsMgu8MVyMfW2btIAE1iQtF0D5jWauSWTgt242myla/5LAWmfI8fk1WGDtL5uKNG2btIAE1iQtF0BxFtHfKOUPW/qt5gvZlNCaBSSw1hi5DE+8MoAyc+/FK7BYOHVZCaU1YgEJrBEiroXBpVIMnD1c4TOrcWwU2raABNY2P45ubbLyiQ36Lt1ozsCaYZTAclDlq+kpLL70RoPDHKwBpQSWgyqXFNdw8KNZxBysAaUEloGq8FkUF6+/fE5R6zkScCeBJSAJHosPrPjzYNxSZJzsUGjeAhJY8xQBoP/5Ih8eEi89mUIKC0hgGWjytYi+UIrXX5pHzMCaYZTAMlDlLx7lNVdcjWVALYywgASWoxvwGqwLugbrbNF4TAJrnCCDN4O8OKkRN5k50eHrOjKgHzVGCSwD/ZRXTMrzhTf0ZvHoSgb8I8YogWUgn5McsTzKbzRrmiMDb8AogeUgioPC8GE+TR8LgHPgHy1KCSwD9Zw75LCQkxsUml+LZUA+eowSWI4usDZxEWvnx3IgHzlKCSxHB+gm6em9GPpDxhznMEqUElgG2jmLyOEhQzxwKYG5PRr/lsAaJ8jg8T5YhBBalxJHtG3QAhJYg6RcgLSC3/L7Xz48ZDyEdiGzElqygATWEhtXY6G/muCmiguMfwpCzF1trYaOiKaGyLgSSrdUyh+2nEFsF/9q85XFdWA4C0hgw9n+Ji373wejH2OM7+XQawNuYr/B8kpgg5n+Bg3zGoxMcWi4qNsbFFfW4SwggQ1n+5u07HOG9FxLuxZzsd2kBuUdxAIS2CBmv2GjXCrFay5ee/kjl/r7YDc04VDZJbChLH+TducQmHsvL8WbzWLuJhYcLK9oGsz0N2iY12DxFilegzGc+UbfbVtAAmubH0c3hbxiaj6EpmW/GZjTQCMFS7zu4gxiiIygtao+BXXyYCloqtdg8eIAfz+9JJaAOwksAUmY4PAhIm8zU2S+ol7LfRNwJ4ElIMmm5jlEZIgVHL4q0dP03awFgq5mAQoYLLA0n+ULpfpxGad5C8iDNU8RAB7UoSGx8jEVvvDmhDsKrVtAAmudIeI7hqCOKtBjbCkyzigqNG8BCax5igDwEAKLa65D7DOuBy4zMKf7YClY8vtgG7A1wfVYt00Bftwg5cEy8D+zafpSXgDsLXy4ov5w69MynMFoMUpgGag/hcAOICqKi+EUn27QaEn6atMCElibvOyi4hCRr2k7rV7rjd3D2mvXAroP1i43HTK+OPsYXuw1bPmPgnuKj0LzFpAHa54iALxdxXQMad2GJ3uCNHmxDMxpFjEFS/RYFBcDh4p3sH1R9y1RX61aQB6sVWb6uJ5heHgPCY/weVYPcF+heQvoGqx5igBwBQ/2IT738GE89jNgHzlGebAMHeAQkmL4CJ83MUT8SMNDs0eCL3mwBCThxvK6/BQ+3D6C2CKeAfvIMcqDZegAJxDWdyvQT8F7fRdeTCGFBf4X2/ZlBjAeg2cAAAAASUVORK5CYII=`

export function getMouseGroup() {
  const group = new Group()
  const planGeometry = new PlaneGeometry(0.3, 0.3)
  const planTexture = new TextureLoader().load(planTextureUrl)
  planTexture.encoding = sRGBEncoding
  const planMaterial = new MeshBasicMaterial({ map: planTexture, transparent: true, depthTest: false })
  const planMesh = new Mesh(planGeometry, planMaterial)

  const zPath = new CurvePath<Vector3>()
  zPath.add(new LineCurve3(new Vector3(0, 0, 0), new Vector3(0, 0, 0.1)))
  const zGeometry = new TubeGeometry(zPath, 8, 0.004)
  const zMaterial = new MeshBasicMaterial({ color: 0x33f1ef, depthTest: false, transparent: true, side: DoubleSide })
  const zMesh = new Mesh(zGeometry, zMaterial)

  const ballGeometry = new SphereGeometry(0.01, 20, 20)
  const ballMesh = new Mesh(ballGeometry, zMaterial)
  ballMesh.position.set(0, 0, 0.1)

  group.name = 'mouse-current'
  group.add(planMesh)
  return group
}
